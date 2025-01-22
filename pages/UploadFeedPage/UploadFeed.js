import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import AddPhotoLibrary from "../../components/NewFeed/AddPhotoLibrary";
export default function UploadFeed() {
  const editorRef = useRef();
  const [text, setText] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.uploadContainer}>
        <Text style={styles.title}>Đăng bài</Text>
        <Text style={styles.secondTitle}>
          Cập nhật lần cuối: 21:48 07/01/2025
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Tiêu đề bài viết"
          multiline
        />
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            marginVertical: 16,
          }}
        >
          <Icon name="comment" size={16} color="#1B75D0" />
          <Text style={{ fontSize: 14, color: "#1B75D0" }}>
            Danh mục địa phương {`(`}tùy chọn{`)`}
          </Text>
        </View>
        {/* <RichEditor
          ref={editorRef}
          style={styles.editor}
          placeholder="Start typing here..."
          initialContentHTML={text}
        /> */}
        <RichToolbar
          editor={editorRef}
          style={styles.toolbar}
          actions={["bold", "italic", "underline"]}
          getEditor={() => editorRef.current}
        />
        <AddPhotoLibrary />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  uploadContainer: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
  },
  secondTitle: {
    fontSize: 13.6,
    color: "#6B7280",
    marginBottom: 24,
  },
  input: {
    fontSize: 15.5, // Kích thước chữ
    color: "#495057", // Màu chữ
    borderWidth: 0.8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontWeight: 600,
    borderRadius: 8,
  },
});
