export type APIDataProps<T> = {
  data: T;
  count?: number | undefined;
  message?: string;
};

export type APIErrorProps = {
  response: {
    data: {
      message: string;
    };
  };
  message?: string;
};

export type APIErrorResProps = {
  message: string;
};
