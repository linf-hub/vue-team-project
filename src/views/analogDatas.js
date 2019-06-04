export default {
  // 路由连接数据
  routeDatas: [{
    path: "/",
    name: "dashboard",
    component: "dashboard",
    children: [
      {
        path: "/courseManagement",
        component: "courseManagement/courseManagement",
        name: "courseManagement"
      },
      {
        path: "/createCourse",
        component: "courseManagement/createCourse",
        name: "createCourse"
      },
      {
        path: "/meetingManagement",
        component: "meetingManagement/meetingManagement",
        name: "meetingManagement"
      },
      {
        path: "/createMeeting",
        component: "meetingManagement/createMeeting",
        name: "createMeeting"
      },
      {
        path: "/adminManage",
        component: "systemManage/adminManage",
        name: "adminManage"
      },
      {
        path: "/roleManage",
        component: "systemManage/roleManage",
        name: "roleManage"
      },
      //caseManage
      {
        path: "/caseManage",
        component: "caseManage/caseManage",
        name: "caseManage"
      },
      {
        path: "/caseScreen",
        component: "caseManage/caseScreen",
        name: "caseScreen"
      },
      // liveRoomManage
      {
        path: "/liveRoomManage",
        component: "liveRoomManage/liveRoomManage",
        name: "liveRoomManage"
      },
      {
        path: "/questionList",
        component: "liveRoomManage/questionList",
        name: "questionList"
      },
      {
        path: "/registrationList",
        component: "registrationManagement/registrationList",
        name: "registrationList"
      },
      {
        path: "/generalUserManagement",
        component: "userManagement/generalUserManagement",
        name: "generalUserManagement"
      },
      {
        path: "/lecturerManagement",
        component: "userManagement/lecturerManagement",
        name: "lecturerManagement"
      }
    ]
  }],
  // 路由菜单数据
  menuDatas: [
    {
      index: "/courseManagement",
      title: "课程管理",
      icon: "",
      subs: []
    },
    {
      index: "/meetingManagement",
      title: "会议管理",
      icon: "",
      subs: []
    },
    {
      index: "3",
      title: "用户管理",
      icon: "",
      subs: [
        {
          index: "/generalUserManagement",
          title: "普通用户管理",
          icon: ""
        },
        {
          index: "/lecturerManagement",
          title: "讲师管理",
          icon: ""
        }
      ]
    },
    {
      index: "/registrationList",
      title: "报名管理",
      icon: "",
      subs: []
    },
    {
      index: "/liveRoomManage",
      title: "直播间管理",
      icon: "",
      subs: []
    },
    {
      index: "6",
      title: "病例管理",
      icon: "",
      subs: [
        {
          index: "/caseManage",
          title: "病例管理",
          icon: ""
        },
        {
          index: "/caseScreen",
          title: "病例筛选",
          icon: ""
        }
      ]
    },
    {
      index: "7",
      title: "系统管理",
      icon: "",
      subs: [
        {
          index: "/adminManage",
          title: "管理员",
          icon: ""
        }, {
          index: "/roleManage",
          title: "角色管理",
          icon: ""
        }
      ]
    }
  ]
}