import http from "./httpServices";


export function getAllComments() {
  return http.get("/comments");
}

export function deleteComment(commentId) {
  return http.delete(`/comments/${commentId}`);
}
export function addNewComment(data) {
    const token = "SECURE TOKEN!";
    const header = {
        headers: {
            Authorization: `BEARER ${token}`,
        }
    }
    return http.post("/comments/", data,header);
}
export function getOneComment(id) {
  return http.get(`/comments/${id}`);
}
