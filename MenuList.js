import React, { useContext, useState, useEffect } from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import {getFilteredMenuItems} from '../utils/MenuData';
import { SettingsContext } from '../utils/MenuProvider';

const styles = StyleSheet.create({
  container: { margin: 10, backgroundColor: '#FFF' },
  title: { fontSize: 24, fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0, marginTop: 5 },
  description: { flex: 0.8, margin: 5, fontSize: 14 },
  price: { fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-start' },
  image: { flex: 0.4, width: 100, height: 100 },
  separator: { borderColor: '#DDDDDD', borderBottomWidth: 1 }
});

const MenuList = () => {
  const { settings, updateSetting } = useContext(SettingsContext);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    getFilteredMenuItems(settings.selectedCategories, "")
      .then(data => {
        setMenuData(data);
        
      });
  }, []); 

  useEffect(() => {
    getFilteredMenuItems(settings.selectedCategories, settings.searchText)
      .then(data => setMenuData(data));
      console.log("MenuData: " + JSON.stringify(menuData));
  }, [settings.selectedCategories]);
  
  useEffect(() => {
    getFilteredMenuItems(settings.selectedCategories, settings.searchText)
      .then(data => setMenuData(data));
      console.log("MenuData: " + JSON.stringify(menuData));
  }, [settings.searchText]);

