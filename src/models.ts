
export interface IAuthor {
  _id: string,
  email: string,
  firstName: string,
  lastName: string,
  subscriptions: string[]
};

export interface NewAuthor {
  firstName: string,
  lastName: string
}

export interface INewMessage {
  message: string
}

export interface IEmail {
  email: string
}

export type resultProps = {
  _id: string,
  userId: string,
  message: string,
  datetime: string,
  user: IAuthor

}
