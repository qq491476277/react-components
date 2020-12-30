import 'package:flutter/material.dart';
import 'package:flutter_app123/http.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Home();
  }
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(top: 30.0),
      child: LoginForm(),
    );
  }
}

class LoginForm extends StatefulWidget {

  @override
  _LoginFormState createState() => new _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {

  TextEditingController _unameController = new TextEditingController();
  TextEditingController _pwdController = new TextEditingController();
  GlobalKey _formKey = new GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Form(
        key: _formKey,
        autovalidate: true,
        child: Column(
          children: <Widget>[
            Align(
                alignment: FractionalOffset(0.5, 0.0),
                child: ClipOval(
                  child: Image.network(
                    'https://i0.hdslb.com/bfs/face/member/noface.jpg@72w_72h_1c.webp',
                    alignment: Alignment.bottomRight,
                  ),
                )),

            TextFormField(
                autofocus: true,
                controller: _unameController,
                decoration: InputDecoration(
                    labelText: "用户名",
                    hintText: "用户名或邮箱",
                    prefixIcon: Icon(Icons.person)),
                // 校验用户名
                validator: (v) {
                  return v
                      .trim()
                      .length > 0 ? null : "用户名不能为空";
                }
            ),
            TextFormField(
                controller: _pwdController,
                decoration: InputDecoration(
                    labelText: "密码",
                    hintText: "您的登录密码",
                    prefixIcon: Icon(Icons.lock)),
                obscureText: true,
                validator: (v) {
                  return v
                      .trim()
                      .length > 5 ? null : "密码不能少于6位";
                }
            ),
            RaisedButton(
              child: Text("登录"),
              color: Colors.blue,
              highlightColor: Colors.blue[700],
              colorBrightness: Brightness.dark,
              splashColor: Colors.grey,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20.0)),
              onPressed: () {
                if ((_formKey.currentState as FormState).validate()) {
                  //验证通过提交数据
                  print(_unameController.text);
//                  HttpTestRoute();
                }
              },
            ),

//            RaisedButton(
//              child: Text("对话框1"),
//              onPressed: () async {
//                //弹出对话框并等待其关闭
//                bool delete = await showDeleteConfirmDialog1(context);
//                if (delete == null) {
//                  print("取消删除");
//                } else {
//                  print("已确认删除");
//                  //... 删除文件
//                }
//              },
//            ),
          ],
        )
    );
  }
}


// 弹窗
Future<bool> showDeleteConfirmDialog1(context) {
  return showDialog<bool>(
    context: context,
    builder: (context) {
      return AlertDialog(
        title: Text("提示"),
        content: Text("您确定要删除当前文件吗?"),
        actions: <Widget>[
          FlatButton(
            child: Text("取消"),
            onPressed: () => Navigator.of(context).pop(), // 关闭对话框
          ),
          FlatButton(
            child: Text("删除"),
            onPressed: () {
              //关闭对话框并返回true
              Navigator.of(context).pop(true);
            },
          ),
        ],
      );
    },
  );
}
