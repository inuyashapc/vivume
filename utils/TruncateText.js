export default function TruncateText({ description, maxLength }) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "..."; // Cắt chuỗi đến vị trí maxLength và thêm "..."
  }
  return description; // Trả về chuỗi gốc nếu ngắn hơn maxLength
}
