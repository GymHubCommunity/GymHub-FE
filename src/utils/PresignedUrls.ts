interface PresignedUrlsProps {
  presignedUrl: string;
  type: 'S3' | 'DB';
}

/**PresignedURL 사용 용도별 인덱싱 유틸
 *
 *
 * type
 *
 *
 *  S3 : S3 버킷에 저장을 위한  권한이 담긴 URL
 *
 *
 *  DB : DB에 저장을 위한 (S3 버킷에 저장된 Image를 조회가 가능한 URL)
 * @param o
 * @returns
 */
function PresignedUrls({ presignedUrl, type }: PresignedUrlsProps) {
  const startIndex = type === 'S3' ? presignedUrl.lastIndexOf('/') + 1 : 0;
  const endIndex =
    type === 'S3' ? presignedUrl.length : presignedUrl.indexOf('?');
  const result = presignedUrl.substring(startIndex, endIndex);

  return result;
}

export default PresignedUrls;
