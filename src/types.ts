export interface ILaunch {
  id: string;
  name: string;
  net: string;
  status: {
    id: number;
    name: string;
  };
  image: string;
}
