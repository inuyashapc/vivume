const date = new Date(); // Ngày giờ hiện tại

export default function FormatDate() {
  const vietnamFormatter = new Intl.DateTimeFormat("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  });

  let vietnamTime = vietnamFormatter.format(date);
  return (vietnamTime = vietnamTime
    .replace("ngày ", "")
    .replace("tháng ", "tháng "));
}
