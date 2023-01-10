# Props


所有 prop 默认都是可选的，除非声明了 required: true。
除 Boolean 外的未传递的可选 prop 将会有一个默认值 undefined。

Boolean 类型的未传递 prop 将被转换为 false。这可以通过为它设置 default 来更改——例如：设置为 default: undefined 将与非布尔类型的 prop 的行为保持一致。

如果声明了 default 值，那么在 prop 的值被解析为 **undefined** 时，无论 prop 是未被传递还是显式指明的 undefined，都会改为 default 值。


# 触发与监听事件

我有点明白了
  父组件 {
    const 回调 = () => {}
    @事件="回调"
  }

  子组件 {
    defineEmits(['事件'])
    $emit('事件')
  }
