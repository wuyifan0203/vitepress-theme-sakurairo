---
title: webGL
cover: https://www.loliapi.com/acg/
layout: page
publish: 2022-08-22 11:29:00
update: 2022-08-24 11:29:00
tags: ['webGL']
---

# webGL

## 参考

- [WebGL 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/webgl-tutorial.html)

# Vector

## 点乘（内积）

向量点积使用 a・b 表示，返回一个标量

### 代数意义
表示两个向量对应位置上的值相乘再相加的操作，其结果即为点积
$$\vec{a} \cdot \vec{b} = x_a x_b + y_a y_b + z_a z_b $$
### 几何意义
表示点积是两个向量的长度与它们夹角余弦的积
$$\vec{a} \cdot \vec{b} =|\vec{a}|\ |\vec{b}| \cos \theta $$

* 表示 $\vec{a}$ 在 $\vec{b}$ 上的投影与｜b｜ 的乘积
* 表示两个向量的相似程度，判断为同向还是异向 ，为0 时则垂直
* 求两向量夹角

## 叉乘（外积）

向量叉积使用 $\vec{a}\times\vec{b}$ 表示，返回一个矢量

### 代数意义
表示行列式的计算的对应量 $\begin{vmatrix} x_a & y_a & z_a \\ x_b & y_b & z_b \\ X & Y & Z \end{vmatrix}$ ,计算结果为  $(y_a z_b - z_a y_b)X + (z_a x_b - x_a z_b)Y +(x_a y_b - y_a x_b)Z$
### 几何意义

根据右手定则，从 $\vec a$ 旋转到 $\vec b$ 所形成的平面，拇指指向方向结果 ,$\vec n$ 代表平面的法向量
$$\vec{a} \times \vec{b} =|\vec{a}|\ | \vec{b}| \sin \theta \vec{n} $$


* 如果以 $\vec a$ 和 $\vec b$ 为边构成一个平行四边形，那么这两个向量外积的模长与这个平行四边形的面积相等
* 判断在上侧还是在下侧