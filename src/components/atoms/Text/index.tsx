import styles from '@/components/atoms/Text/Text.module.scss';
import classNames from 'classnames/bind';
import { HTMLAttributes, ReactNode } from 'react';

const cn = classNames.bind(styles);

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  post?:
    | 'userName'
    | 'description'
    | 'postingTime'
    | 'exerciseCompletedTime'
    | 'heartCount'
    | 'commentUserName'
    | 'comment'
    | 'commentCount'
    | 'commentHeartCount'
    | 'hashtag'
    | 'searched'
    | 'noPost'
    | 'story'
    | 'storyName'
    | 'commentDate';
  button?: string;
  onBoarding?: string;
  records?:
    | 'name'
    | 'value'
    | 'modalTitle'
    | 'modalInfo'
    | 'trackName'
    | 'noExercise'
    | 'directInput';
  children: ReactNode;
}

function Text({ post, button, onBoarding, records, children }: TextProps) {
  return (
    <span className={cn('wrapper', post, button, onBoarding, records)}>
      {children}
    </span>
  );
}

export default Text;
