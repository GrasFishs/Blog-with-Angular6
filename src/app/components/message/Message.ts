export interface Message {
  msgType: number; // 0 system 1 privacy 2 dynamic
  type: string; // 'comment'发表评论，'reply'回复，'review'审核，'publish'发表,'system'系统
  content: string;
  date: Date;
  /**
   * 以下为 system必要的值
   */
  title?: string;
  /**
   *以下为 comment,reply,publish必要的值
   */
  userId?: string;
  username?: string;
  avatar?: string;
  articleId?: string;
  articleTitle?: string;
}
