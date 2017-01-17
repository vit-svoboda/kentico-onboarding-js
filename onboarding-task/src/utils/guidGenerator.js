const createGuidPart = () => Math
  .floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

const createGuid = () =>
  createGuidPart() + createGuidPart() + '-'
  + createGuidPart() + '-'
  + createGuidPart() + '-'
  + createGuidPart() + '-'
  + createGuidPart() + createGuidPart() + createGuidPart();

export default createGuid;
