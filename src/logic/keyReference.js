export default function keyReference(keyName) {
  const validKeys = [
    {
      key: "0",
      value: "0",
    },
    {
      key: "1",
      value: "1",
    },
    {
      key: "2",
      value: "2",
    },
    {
      key: "3",
      value: "3",
    },
    {
      key: "4",
      value: "4",
    },
    {
      key: "5",
      value: "5",
    },
    {
      key: "6",
      value: "6",
    },
    {
      key: "7",
      value: "7",
    },
    {
      key: "8",
      value: "8",
    },
    {
      key: "9",
      value: "9",
    },
    {
      key: "Escape",
      value: "AC",
    },
    {
      key: "c",
      value: "AC",
    },
    {
      key: "%",
      value: "%",
    },
    {
      key: "/",
      value: "÷",
    },
    {
      key: "*",
      value: "x",
    },
    {
      key: "+",
      value: "+",
    },
    {
      key: ".",
      value: ".",
    },
    {
      key: "=",
      value: "=",
    },
    {
      key: "Enter",
      value: "=",
    },
    {
      key: "–",
      value: "+/-",
    },
    {
      key: "-",
      value: "-",
    },
    {
      key: "Backspace",
      value: "Back",
    },
  ];

  const keyValue = validKeys.filter(
    obj => obj.key === keyName.key && !keyName.metaKey && !keyName.ctrlKey,
  );

  return keyValue.length ? keyValue[0].value : false;
}
