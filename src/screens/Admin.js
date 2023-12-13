import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Tải dữ liệu từ API hoặc cơ sở dữ liệu
    fetchData();
  }, []);

  const fetchData = async () => {
    // Giả sử chúng ta có một hàm để tải dữ liệu từ API
    const apiData = await fetchYourApiData();
    setData(apiData);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      {/* Thêm các nút hoặc hành động quản trị tại đây */}
      <Button title="Edit" onPress={() => editItem(item.id)} />
      <Button title="Delete" onPress={() => deleteItem(item.id)} />
    </View>
  );

  const editItem = (id) => {
    // Hàm để chỉnh sửa mục
  };

  const deleteItem = (id) => {
    // Hàm để xóa mục
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Admin Screen</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text>Alo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
  },
});

export default Admin;
