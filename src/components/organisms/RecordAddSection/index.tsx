import RecordAddArticle from '@/components/molecules/RecordAddArticle';
import commonStyles from '@/components/organisms/Common.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import { RecordAddTypeProp } from '@/types/recordAddType';

function RecordAddSection({ type }: RecordAddTypeProp) {
  return (
    <div className={commonStyles.wrapper}>
      <BackButtonHeader
        pageName={type === 'add' ? '운동 추가' : '직접 입력하기'}
      />
      <RecordAddArticle type={type} />
    </div>
  );
}

export default RecordAddSection;
