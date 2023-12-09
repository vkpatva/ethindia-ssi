interface DataItem {
  [key: string]: any;
}

interface DataObject {
  [key: string]: DataItem[];
}

export const converter = (data: DataObject): DataItem[] => {
  const result: DataItem[] = [];

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const items = data[key];

      for (const item of items) {
        result.push({
          title: item.__typename,
          ...item,
          message: item.blockNumber,
        });
      }
    }
  }

  return result.sort(
    (a, b) => parseInt(a.blockNumber) - parseInt(b.blockNumber)
  );
};
