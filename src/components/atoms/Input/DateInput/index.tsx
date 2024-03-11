import LeftArrowSvg from '@/assets/icons/LeftArrorSvg';
import RightArrowSvg from '@/assets/icons/RightArrowSvg';
import RegisterItem from '@/components/atoms/Form/RegisterItem';
import styles from '@/components/atoms/Input/DateInput/DataInput.module.scss';
import useDateHeaderControls from '@/hooks/useDateHeaderControls';
import useSelectedDate from '@/hooks/useSelectedDate';
import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateInput() {
  const { selectedDate, updateDate } = useSelectedDate();
  const { year, month, decreaseHeader, increaseHeader } =
    useDateHeaderControls(selectedDate);

  return (
    <RegisterItem>
      <div className={styles.wrapper}>
        <DatePicker
          inline
          dateFormat="yyyy.MM.dd"
          calendarStartDay={1}
          shouldCloseOnSelect
          selected={selectedDate}
          className={styles.input}
          calendarClassName={styles.calender}
          dayClassName={(d) =>
            d.getDate() === selectedDate!.getDate()
              ? styles.selectedDay
              : styles.unselectedDay
          }
          locale={ko}
          onChange={(date) => updateDate(date)}
          renderCustomHeader={({ decreaseMonth, increaseMonth }) => (
            <div className={styles.header}>
              <button
                type="button"
                onClick={() => {
                  decreaseMonth();
                  decreaseHeader();
                }}
                className={styles.monthButton}
              >
                <LeftArrowSvg />
              </button>
              <div className={styles.dateWrapper}>
                {year}. {month}월
              </div>
              <button
                type="button"
                onClick={() => {
                  increaseMonth();
                  increaseHeader();
                }}
                className={styles.monthButton}
              >
                <RightArrowSvg />
              </button>
            </div>
          )}
        />
      </div>
    </RegisterItem>
  );
}

export default DateInput;
