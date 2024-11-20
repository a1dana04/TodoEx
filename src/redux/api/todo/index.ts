import { api as index } from "..";

const ENDPOINT = "https://api.elchocrud.pro/api/v1/68e4997605f0e5a518bc483ebb57f285/todo1111";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TODO.getTodosRes, TODO.getTodosReq>({
      query: () => ({
        url: `${ENDPOINT}`,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),

    postTodo: builder.mutation<TODO.postTodoRes, TODO.postTodoReq>({
      query: (data) => ({
        url: `${ENDPOINT}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),

    deleteTodo: builder.mutation<TODO.deleteTodoRes, TODO.deleteTodoReq>({
      query: (_id) => ({
        url: `${ENDPOINT}/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),

    editTodo: builder.mutation<TODO.editTodoRes, TODO.editTodoReq>({
      query: ({data,_id}) => ({
        url: `${ENDPOINT}/${_id}`,
        method: "PATCH",
        body:data,
      }),
      invalidatesTags: ["todo","file"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = api;