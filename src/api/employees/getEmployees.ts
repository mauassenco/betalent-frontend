import baseApi from '../configApi';

export interface IGetEmployees {
  id: number;
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

export const getEmployees = (props?: IGetEmployees) =>
  baseApi({
    url: `employees`,
    method: 'GET',
    params: {
      ...props,
    },
  });

export const searchEmployees = (query: string) =>
  baseApi({
    url: `employees`,
    method: 'GET',
    params: {
      q: query,
    },
  });
