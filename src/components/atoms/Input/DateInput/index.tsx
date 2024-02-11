import RegisterItem from '@/components/atoms/Form/RegisterItem';
import DateFormat from '@/utils/DateFormat';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '@/components/atoms/Input/DateInput/DataInput.module.scss';
import LeftArrowSvg from '@/assets/icons/LeftArrorSvg';
import RightArrowSvg from '@/assets/icons/RightArrowSvg';
import { ko } from 'date-fns/locale';
import useSelectedDate from '@/hooks/useSelectedDate';

function DateInput() {
  const { year, month, day } = DateFormat(new Date());
  const minDateTime = year + '-' + month + '-' + day;
  const { selectedDate, updateDate } = useSelectedDate();

  return (
    <RegisterItem>
      <div className={styles.wrapper}>
        <DatePicker
          inline
          dateFormat="yyyy.MM.dd"
          calendarStartDay={1}
          shouldCloseOnSelect
          minDate={new Date(minDateTime)}
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
                onClick={decreaseMonth}
                className={styles.monthButton}
              >
                <LeftArrowSvg />
              </button>
              <div className={styles.dateWrapper}>
                {year}. {month}월
              </div>
              <button
                type="button"
                onClick={increaseMonth}
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
