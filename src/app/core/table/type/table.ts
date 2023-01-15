export interface TableColumn<V = any> {
  label?: string;
  value: V;
}

export type Table<V = any> = {
  id?: string;
  columns: TableColumn<V>[];
};
