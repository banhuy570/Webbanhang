export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Sản phẩm tốt",
      username: "Huy",
      userId: "1",
      parentId: null,
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "giao hàng nhanh vải tốt",
      username: "Ngọc Huy",
      userId: "2",
      parentId: null,
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Sản phẩm tốt Giao hàng nhanh",
      username: "Ngọc Huy",
      userId: "2",
      parentId: "1",
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "giao hàng nhanh vải tốt áo đẹp",
      username: "Ngọc Huy",
      userId: "2",
      parentId: "2",
      createdAt: "2022-05-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Ngọc Huy",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
