<template>
  <div class="wrapper">
    <el-form class="form form_block">
      <el-row>
        <el-col :span="5">
          <el-form-item class="border">
            <el-input placeholder="请输入账户名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button class="btn_normal" type="primary" @click="search()">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item>
            <el-button class="btn_normal" type="primary" @click="addAccount">
              <i class="el-icon-plus"></i>新增账户
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="form_result">
      <el-table class="table" border stripe :data="tableData">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="level" label="医院/等级"></el-table-column>
        <el-table-column prop="number" label="号别"></el-table-column>
        <el-table-column prop="staffName" label="诊疗费"></el-table-column>
        <el-table-column prop="staffId" label="科室分类"></el-table-column>
        <el-table-column prop="staffTitle" label="专家职级"></el-table-column>
        <el-table-column :label="item.desc" v-for="(item,index) in weekDates" :key="index">
          <el-table-column :prop="item.amKey+'.visitDate'" label="上午">
            <template slot-scope="scope">
              <div v-for="(items,indexs) in scope.row.schedul" :key="indexs">
                <div v-for="(childItem,childIndex) in items" :key="childIndex">
                  <div v-if="index == indexs && childIndex == 0">
                    <span @click='getOrder(items[0])'>{{ items[0].remainCount }}</span>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column :prop="item.amKey+'.visitDate'" label="下午">
            <template slot-scope="scope">
              <div v-for="(items,indexs) in scope.row.schedul" :key="indexs">
                <div v-for="(childItem,childIndex) in items" :key="childIndex">
                  <div v-if="index == indexs && childIndex == 0">
                    <span @click='getOrder(items[1])'>{{ items[1].remainCount }}</span>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>

    <div class="modal_frame">
      <el-dialog title="新增角色" :visible.sync="dialogVisible" width="600px">
        <el-form>
          <el-form-item label="账户名称" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="4-10个数字和字母组合"></el-input>
          </el-form-item>
          <el-form-item label="账户密码" :label-width="formLabelWidth">
            <el-input autocomplete="off" placeholder="4-10个数字和字母组合"></el-input>
          </el-form-item>
          <el-form-item label="角色名称" :label-width="formLabelWidth">
            <el-select placeholder="请选择角色">
              <el-option label="角色一" value="1"></el-option>
              <el-option label="角色二" value="2"></el-option>
            </el-select>
            <el-button class="btn_normal ml20" type="primary">角色选择</el-button>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button class="btn_normal mr80" type="primary" @click="dialogVisible = false">提 交</el-button>
          <el-button class="btn_normal" @click="dialogVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminManage",
  data() {
    return {
      // tableData: [
      //   {
      //     hospitalCode: 1,
      //     deptCode: 1,
      //     staffId: 1,
      //     staffName: "杨医⽣生",
      //     hospitalName: "吉林林⼤大学⽩白求恩第⼀一医院",
      //     decpName: "外科",
      //     staffTitle: "主任医师",
      //     clinicTypeName: "普通⻔门诊",
      //     clinicTypePrice: 51.0,
      //     schedul: [
      //       [
      //         {
      //           id: 10,
      //           visitDate: "2019-10-15",
      //           timeIntervalCode: 1,
      //           remainCount: 15
      //         },
      //         {
      //           id: 10,
      //           visitDate: "2019-10-15",
      //           timeIntervalCode: 1,
      //           remainCount: 15
      //         }
      //       ],
      //       [
      //         {
      //           id: 11,
      //           visitDate: "2019-10-16",
      //           timeIntervalCode: 1,
      //           remainCount: 15
      //         },
      //         {
      //           id: 11,
      //           visitDate: "2019-10-16",
      //           timeIntervalCode: 1,
      //           remainCount: 15
      //         }
      //       ],
      //       [
      //         {
      //           id: 12,
      //           visitDate: "2019-10-17",
      //           timeIntervalCode: 1,
      //           remainCount: 15
      //         },
      //         {
      //           id: 12,
      //           visitDate: "2019-10-17",
      //           timeIntervalCode: 1,
      //           remainCount: 15
      //         }
      //       ],
      //       [
      //         {
      //           id: 13,
      //           visitDate: "2019-10-18",
      //           timeIntervalCode: 1,
      //           remainCount: 15
      //         },
      //         {
      //           id: 13,
      //           visitDate: "2019-10-18",
      //           timeIntervalCode: 1,
      //           remainCount: 15
      //         }
      //       ],
      //       [{}, {}],
      //       [{}, {}],
      //       [{}, {}],
      //       [{}, {}]
      //     ]
      //   }
      // ],
      // weekDates: [
      //   {
      //     desc: "周⼆二（10-15）",
      //     amKey: "am20191015",
      //     pmKey: "pm20191015",
      //     date: "2019-10-15"
      //   },
      //   {
      //     desc: "周三（10-16）",
      //     amKey: "am20191016",
      //     pmKey: "pm20191016",
      //     date: "2019-10-16"
      //   },
      //   {
      //     desc: "周四（10-17）",
      //     amKey: "am20191017",
      //     pmKey: "pm20191017",
      //     date: "2019-10-17"
      //   },
      //   {
      //     desc: "周五（10-18）",
      //     amKey: "am20191018",
      //     pmKey: "pm20191018",
      //     date: "2019-10-18"
      //   },
      //   {
      //     desc: "周六（10-19）",
      //     amKey: "am20191019",
      //     pmKey: "pm20191019",
      //     date: "2019-10-19"
      //   },
      //   {
      //     desc: "周⽇日（10-20）",
      //     amKey: "am20191020",
      //     pmKey: "pm20191020",
      //     date: "2019-10-20"
      //   },
      //   {
      //     desc: "周⼀一（10-21）",
      //     amKey: "am20191021",
      //     pmKey: "pm20191021",
      //     date: "2019-10-21"
      //   },
      //   {
      //     desc: "周⼆二（10-22）",
      //     amKey: "am20191022",
      //     pmKey: "pm20191022",
      //     date: "2019-10-22"
      //   }
      // ],
      tableData: [
        {
          hospitalCode: 1,
          deptCode: 1,
          staffId: 1,
          staffName: "杨医⽣生",
          hospitalName: "吉林林⼤大学⽩白求恩第⼀一医院",
          decpName: "外科",
          staffTitle: "主任医师",
          clinicTypeName: "普通⻔门诊",
          clinicTypePrice: 51.0,
          schedul: [
            [
              {
                timeIntervalCode: 1,
                visitDate: "2019-10-15",
                id: 10,
                remainCount: 15
              },
              {
                timeIntervalCode: 2,
                visitDate: "2019-10-15",
                id: 17,
                remainCount: 15
              }
            ],
            [
              {
                timeIntervalCode: 1,
                visitDate: "2019-10-16",
                id: 11,
                remainCount: 15
              },
              {
                timeIntervalCode: 2,
                visitDate: "2019-10-16",
                id: 18,
                remainCount: 13
              }
            ],
            [
              {
                timeIntervalCode: 1,
                visitDate: "2019-10-17",
                id: 12,
                remainCount: 15
              },
              {
                timeIntervalCode: 2,
                visitDate: "2019-10-17",
                id: 19,
                remainCount: 15
              }
            ],
            [
              {
                timeIntervalCode: 1,
                visitDate: "2019-10-18",
                id: 13,
                remainCount: 15
              },
              {
                timeIntervalCode: 2,
                visitDate: "2019-10-18",
                id: 20,
                remainCount: 15
              }
            ],
            [
              {
                timeIntervalCode: 1,
                visitDate: "2019-10-19",
                id: "",
                remainCount: ""
              },
              {
                timeIntervalCode: 2,
                visitDate: "2019-10-19",
                id: "",
                remainCount: ""
              }
            ],
            [
              {
                timeIntervalCode: 1,
                visitDate: "2019-10-20",
                id: "",
                remainCount: ""
              },
              {
                timeIntervalCode: 2,
                visitDate: "2019-10-20",
                id: "",
                remainCount: ""
              }
            ],
            [
              {
                timeIntervalCode: 1,
                visitDate: "2019-10-21",
                id: "",
                remainCount: ""
              },
              {
                timeIntervalCode: 2,
                visitDate: "2019-10-21",
                id: "",
                remainCount: ""
              }
            ],
            [
              {
                timeIntervalCode: 1,
                visitDate: "2019-10-22",
                id: "",
                remainCount: ""
              },
              {
                timeIntervalCode: 2,
                visitDate: "2019-10-22",
                id: "",
                remainCount: ""
              }
            ]
          ]
        }
      ],
      weekDates: [
        {
          desc: "周⼆二（10-15）",
          amKey: "am20191015",
          pmKey: "pm20191015",
          date: "2019-10-15"
        },
        {
          desc: "周三（10-16）",
          amKey: "am20191016",
          pmKey: "pm20191016",
          date: "2019-10-16"
        },
        {
          desc: "周四（10-17）",
          amKey: "am20191017",
          pmKey: "pm20191017",
          date: "2019-10-17"
        },
        {
          desc: "周五（10-18）",
          amKey: "am20191018",
          pmKey: "pm20191018",
          date: "2019-10-18"
        },
        {
          desc: "周六（10-19）",
          amKey: "am20191019",
          pmKey: "pm20191019",
          date: "2019-10-19"
        },
        {
          desc: "周⽇日（10-20）",
          amKey: "am20191020",
          pmKey: "pm20191020",
          date: "2019-10-20"
        },
        {
          desc: "周⼀一（10-21）",
          amKey: "am20191021",
          pmKey: "pm20191021",
          date: "2019-10-21"
        },
        {
          desc: "周⼆二（10-22）",
          amKey: "am20191022",
          pmKey: "pm20191022",
          date: "2019-10-22"
        }
      ],
      dialogVisible: false,
      formLabelWidth: "76px"
    };
  },
  methods: {
    addAccount() {
      this.dialogVisible = true;
    },
    getOrder(item) {
      console.log(item);
    }
  }
};
</script>

<style>
</style>


