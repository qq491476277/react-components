使用webpack babel解析jsx

createElement，将children合并进props，可以props.children访问，并判断是dom还是文本节点

render 生成根fiber树 workInProgressRoot，dom指向容器，props存children指向vdom，alternate指向之前的fiber树
定义每个节点对应的fiber nextUnitOfWork 初始化等于workInProgressRoot

requestIdleCallback 获取浏览器空闲时间，nextUnitOfWork获取到值开始完成任务，并获取下一个任务

reconcileChildren mount 生成新的fiber完成fiber结构的连接，父子兄弟的关系。 update记录下增删改，并给对应fiber打上effectTag的标记

requestIdleCallback完成nextUnitOfWork任务，nextUnitOfWork为空，并且workInProgressRoot存在，调度过程完成

commitRoot,根据effectTAG,递归渲染fiber