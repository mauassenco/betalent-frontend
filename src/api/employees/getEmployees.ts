import baseApi from '../configApi';

export interface IGetEmployees {
  id: number;
  name: string;
  job: string;
  admissionDate: Date;
  phone: string;
  image: string;
}

export const getEmployees = (props?: IGetEmployees) =>
  baseApi({
    url: `employees`,
    method: 'GET',
    params: {
      ...props,
    },
  });
