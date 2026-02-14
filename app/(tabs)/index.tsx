import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();

  const todos = useQuery(api.todos.getTodos);

  console.log(todos);

  const addTodo = useMutation(api.todos.addTodo);

  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={styles.content}>Toggle Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addTodo({ text: "New Todo" })}>
        <Text style={styles.content}>Add Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clearAllTodos()}>
        <Text style={styles.content}>Clear All Todos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
   fontSize: 18,
  },
})