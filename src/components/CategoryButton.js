// import { View, Text } from "react-native";
// import React from "react";
// import { useDispatch,useSelector } from "react-redux";
// import filterCategoryComicsActions from "../store/comicCategories/actions"
// const {filterCategoryComics} = filterCategoryComicsActions

// const CategoryButton = (props) => {
//   const { id, index, name } = props;
//   const [click, setClick] = useState(true);
//   const [color, setColor] = useState(false);
//   const dispatch = useDispatch();
//   let category = useSelector((store) => store.comics);
//   console.log(category)

//   useFocusEffect(
//     useCallback(()=>{
//         if (category.length > 0) {
//             if (category.includes(id)) {
//               setColor(!color);
//             }
//           }
      
//     },[])
//   )

//   const getId = (e) => {
//     setClick(!click);
//     setColor(!color);
//     dispatch(filterCategoryComics(id));
//   };


//   return (
//     <View>
//      <Text onPress={getId} id={id} style={styles.textCategory}>{name}</Text>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
    
//     textCategory:{
//         color:'#EF8481',
//         alignSelf:'center'
//     }
    
//   });
// export default CategoryButton;
