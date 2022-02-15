// pixijs 碰撞检测
// 两个矩形是否相交
export function hitObject(obj1, obj2) {
  if (obj1.x + obj1.width < obj2.x || obj1.x > obj2.x + obj2.width) {
    return false;
  }
  if (obj1.y + obj1.height < obj2.y || obj1.y > obj2.y + obj2.height) {
    return false;
  }
  return true;
}
