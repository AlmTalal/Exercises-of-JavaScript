function searchBST(root, val) {
  if (!root) {
    return null;
  } else if (root.val === val) {
    return root;
  } else if (root.val > val) {
    root = searchBST(root.left, val);
    return root;
  } else if (root.val < val) {
    root = searchBST(root.right, val);
    return root;
  }
}
