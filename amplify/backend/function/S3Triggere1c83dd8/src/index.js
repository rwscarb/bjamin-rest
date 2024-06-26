const AWS = require('aws-sdk');

const targetBucketPrefix = 'public/img/';

exports.handler = async function (event) {

  console.log('Received S3 event:', JSON.stringify(event, null, 2));

  const s3 = new AWS.S3();
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  const pathParts = key.split('/');
  const dest = pathParts[2];

  if (![ 'grid', 'carousel' ].includes(dest)) {
    console.log(`skipping with prefix: ${dest}`);
    return {
      statusCode: 200,
      body: JSON.stringify('skipped')
    };
  }

  const prefix = targetBucketPrefix + dest;

  const files = await s3.listObjectsV2({Bucket: bucket, Prefix: prefix}).promise();
  const objects = files.Contents;
  let newIndex = 1;
  if (objects.length) {
    const lastFile = objects.reduce((prev, curr) => (prev.Key > curr.Key) ? prev : curr);
    newIndex = parseInt(lastFile.Key.split('/').pop().split('.')[0]) + 1;
  }
  const paddedIndex = String(newIndex).padStart(3, '0');
  const destKey = `${prefix}/${paddedIndex}.jpg`;

  const getObjectParams = {
    Bucket: bucket,
    Key: key
  };
  const {Body, ContentType} = await s3.getObject(getObjectParams).promise();

  const putObjectParams = {
    Bucket: bucket,
    Key: destKey,
    Body,
    ContentType,
    ContentDisposition: 'inline',
  };
  await s3.putObject(putObjectParams).promise();

  // await s3.deleteObject({
  //   Bucket: bucket,
  //   Key: key
  // }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify('success')
  };
};
