export default {
	install(Vue, opts) {
		/**
		 * 项目所有的下拉列表项放在在这里
		 */
		Vue.prototype.getCmmOptionsInSys = function () {
			let that = this;

			let Obj = {};

			/**
			 * 更加加载查找当前对象的key对应的值，查找第一层。
			 * @param key 查找的键，字符串格式
			 * @returns {*}
			 */
			Obj.getInfoViaKey = function (key) {
				if (key) {
					if (Obj.hasOwnProperty(key)) {
						return Obj[key];
					}
				}
			};
			//自定义一个key作为公共的
			//如：
			//(1),Obj.yourOptions=[{key1:that.$t('xx.yy'),key2:name2}]
			//(2),在任何钩子函数中，使用this.getCmmOptionsInSys()及可以获取到所有的对象参数
			//this.getCmmOptionsInSys().getInfoViaKey('resultOptions')

			//你可以在这个区域添加键值对

			//是否是一个抱怨的下拉选项
			Obj.mdrComplaintQuestion = [{
				keyName: 'Selection not made',
				label: that.$t('cmm.langCmmSelectionNotMade')
			}, {
				keyName: 'YES',
				label: that.$t('cmm.langCmmYes')
			}, {
				keyName: 'NO',
				label: that.$t('cmm.langCmmNo')
			}];
			// 语言
			Obj.language = [{
					keyName: 'CN',
					label: '中文'
				},
				{
					keyName: 'EN',
					label: '英文'
				}
			]
			// 危险源
			Obj.hazard = [{
					keyName: 'Energyhazards',
					label: '能量危害'
				},
				{
					keyName: 'BChazards',
					label: '生物化学危害'
				},
				{
					keyName: 'Operationhazards',
					label: '操作危害'
				},
				{
					keyName: 'Informationhazards',
					label: '信息危害'
				},
				{
					keyName: 'Incorrectresults',
					label: '不正确的结果'
				},
				{
					keyName: 'Delayedresults',
					label: '延迟的结果'
				},
				{
					keyName: 'Incorrectinformation',
					label: '结果伴随的不正确信息'
				}
			]
			// 是否
			Obj.whetherOption = [{
					keyName: 'true',
					label: '是'
				},
				{
					keyName: 'false',
					label: '否'
				}
			]
			// 区域
			Obj.region = [{
					label: '中国',
					keyName: "CN"
				},
				{
					label: 'CE',
					keyName: "CE"
				},
				{
					label: 'FDA',
					keyName: "FDA"
				},
				{
					label: '加拿大',
					keyName: "CAN"
				},
				{
					label: '巴西',
					keyName: "BR"
				},
				{
					label: '日本',
					keyName: "JP"
				},
				{
					label: '澳大利亚',
					keyName: "AUS"
				},
				{
					label: '俄罗斯',
					keyName: "RUS"
				},
				{
					label: '韩国',
					keyName: "KR"
				},
			]
			// 一级功能
			Obj.primaryFunction = [{
					keyName: "SampleNeedleInnerWallCleaning",
					ENLabel: "样本针内壁清洗",
					label: "样本针内壁清洗"
				},
				{
					keyName: "WholeMachineSystem",
					ENLabel: "整机系统",
					label: "整机系统"
				},
				{
					keyName: "AnestheticVentilator",
					ENLabel: "麻醉呼吸机",
					label: "麻醉呼吸机"
				},
				{
					keyName: "SystemApplication",
					ENLabel: "系统应用",
					label: "系统应用"
				},
				{
					keyName: "ReagentManagement",
					ENLabel: "试剂管理",
					label: "试剂管理"
				},
				{
					keyName: "AuxiliaryFunction",
					ENLabel: "辅助功能",
					label: "辅助功能"
				},
				{
					keyName: "GasPurificationAndTransportationSystem",
					ENLabel: "气体净化输送系统",
					label: "气体净化输送系统"
				},
				{
					keyName: "PhysicalComponents",
					ENLabel: "物理部件",
					label: "物理部件"
				},
				{
					keyName: "HumanComputerInteraction",
					ENLabel: "人机交互",
					label: "人机交互"
				},
				{
					keyName: "GasConveyingSystem",
					ENLabel: "气体输送系统",
					label: "气体输送系统"
				},
				{
					keyName: "RespiratorySystem",
					ENLabel: "呼吸系统",
					label: "呼吸系统"
				},
				{
					keyName: "DFxFunction",
					ENLabel: "DFx功能",
					label: "DFx功能"
				},
				{
					keyName: "StandbyTime",
					ENLabel: "待机时长（TM70）",
					label: "待机时长（TM70）"
				},
				{
					keyName: "BasicInfusion",
					ENLabel: "基本输液",
					label: "基本输液"
				},
				{
					keyName: "DataManagement",
					ENLabel: "数据管理",
					label: "数据管理"
				},
				{
					keyName: "MeasuringResponse",
					ENLabel: "测量反应",
					label: "测量反应"
				},
				{
					keyName: "SampleInjection",
					ENLabel: "样本进样",
					label: "样本进样"
				},
				{
					keyName: "LevelDetection",
					ENLabel: "液面检测",
					label: "液面检测"
				},
				{
					keyName: "Stirring",
					ENLabel: "搅拌",
					label: "搅拌"
				},
				{
					keyName: "TrackScheduling",
					ENLabel: "轨道调度",
					label: "轨道调度"
				},
				{
					keyName: "SoftwareFunctions",
					ENLabel: "软件功能",
					label: "软件功能"
				},
				{
					keyName: "NegativePressureSuction",
					ENLabel: "负压吸引",
					label: "负压吸引"
				},
				{
					keyName: "SoftwareSystem",
					ENLabel: "软件系统",
					label: "软件系统"
				},
				{
					keyName: "ImageMode",
					ENLabel: "图像模式",
					label: "图像模式"
				},
				{
					keyName: "PackagingLabels",
					ENLabel: "包装标贴",
					label: "包装标贴"
				},
				{
					keyName: "SafeAndUniversal",
					ENLabel: "安全通用",
					label: "安全通用"
				},
				{
					keyName: "SystemCompressiveStability",
					ENLabel: "系统抗压稳定性（AC/AP/同步单元/TM70）",
					label: "系统抗压稳定性（AC/AP/同步单元/TM70）"
				},
				{
					keyName: "MechanicalSystem",
					ENLabel: "机械系统",
					label: "机械系统"
				},
				{
					keyName: "ParameterMeasurement",
					ENLabel: "参数测量",
					label: "参数测量"
				},
				{
					keyName: "SampleNeedle",
					ENLabel: "样本针",
					label: "样本针"
				},
				{
					keyName: "TM70DetectionInformation",
					ENLabel: "TM70检测信息在中央站正确显示（POE/网线/TM70/AC）",
					label: "TM70检测信息在中央站正确显示（POE/网线/TM70/AC）"
				},
				{
					keyName: "SingleAPMaximumLoadCapacity",
					ENLabel: "单AP最大带载能力",
					label: "单AP最大带载能力"
				},
				{
					keyName: "SamplingSyringe",
					ENLabel: "加样注射器",
					label: "加样注射器"
				},
				{
					keyName: "AutomaticDilutionOfDetergent",
					ENLabel: "清洗剂自动稀释",
					label: "清洗剂自动稀释"
				},
				{
					keyName: "SampleRecovery",
					ENLabel: "样本回收",
					label: "样本回收"
				},
				{
					keyName: "ReagentDiskRotation",
					ENLabel: "试剂盘旋转",
					label: "试剂盘旋转"
				},
				{
					keyName: "SampleBuffer",
					ENLabel: "样本缓冲",
					label: "样本缓冲"
				},
				{
					keyName: "NetworkCoexistence",
					ENLabel: "网络共存(AP/TM70/同步单元)",
					label: "网络共存(AP/TM70/同步单元)"
				},
				{
					keyName: "SamplingAndAnnotation",
					ENLabel: "加样分注",
					label: "加样分注"
				},
				{
					keyName: "OpticalSystem",
					ENLabel: "光学系统",
					label: "光学系统"
				},
				{
					keyName: "ReactionPlate",
					ENLabel: "反应盘",
					label: "反应盘"
				},
				{
					keyName: "ReagentNeedleInnerWallCleaning",
					ENLabel: "试剂针内壁清洗",
					label: "试剂针内壁清洗"
				},
				{
					keyName: "TM70AlarmAbnormal",
					ENLabel: "TM70告警异常",
					label: "TM70告警异常"
				},
				{
					keyName: "ReactionCupCleaning",
					ENLabel: "反应杯清洗",
					label: "反应杯清洗"
				},
				{
					keyName: "DisplayAndInteractionSystem",
					ENLabel: "显示与交互系统",
					label: "显示与交互系统"
				},
				{
					keyName: "LargeAreaAndLargeCapacity",
					ENLabel: "大面积大容量（AP/AC/TM70）",
					label: "大面积大容量（AP/AC/TM70）"
				},
				{
					keyName: "PowerSystem",
					ENLabel: "电源系统",
					label: "电源系统"
				},
				{
					keyName: "ProductSafety",
					ENLabel: "产品安全",
					label: "产品安全"
				},
				{
					keyName: "InspectionMode",
					ENLabel: "检查模式",
					label: "检查模式"
				},
				{
					keyName: "PluggingNeedleDetection",
					ENLabel: "堵针检测",
					label: "堵针检测"
				},
				{
					keyName: "DispatchMonitoring",
					ENLabel: "调度监控",
					label: "调度监控"
				},
				{
					keyName: "SampleDiscRotation",
					ENLabel: "样本盘旋转",
					label: "样本盘旋转"
				},
				{
					keyName: "CleaningNeedleOuterWall",
					ENLabel: "针外壁清洗",
					label: "针外壁清洗"
				},
				{
					keyName: "SampleScanning",
					ENLabel: "样本扫描",
					label: "样本扫描"
				},
				{
					keyName: "InfusionMonitoring",
					ENLabel: "输液监测",
					label: "输液监测"
				},
				{
					keyName: "Maintenance",
					ENLabel: "维护",
					label: "维护"
				}, {
					keyName: "PowerAndBattery",
					ENLabel: "电源与电池",
					label: "电源与电池"
				},
				{
					keyName: "Alarm",
					ENLabel: "报警",
					label: "报警"
				},
				{
					keyName: "State",
					ENLabel: "状态",
					label: "状态"
				},
				{
					keyName: "ReactionCupTransshipment",
					ENLabel: "反应杯转运",
					label: "反应杯转运"
				},
				{
					keyName: "Production",
					ENLabel: "生产",
					label: "生产"
				},
				{
					keyName: "AnesthesiaEvaporator",
					ENLabel: "麻醉蒸发器",
					label: "麻醉蒸发器"
				},
				{
					keyName: "SampleManagement",
					ENLabel: "样本管理",
					label: "样本管理"
				},
				{
					keyName: "MixedIncubation",
					ENLabel: "混匀孵育",
					label: "混匀孵育"
				},
				{
					keyName: "ReagentDish",
					ENLabel: "试剂盘",
					label: "试剂盘"
				},
				{
					keyName: "CleaningOfStirringRodOuterWall",
					ENLabel: "搅拌杆外壁清洗",
					label: "搅拌杆外壁清洗"
				},
				{
					keyName: "MonitoringSystem",
					ENLabel: "监测系统",
					label: "监测系统"
				}
			]
			// 二级功能
			Obj.secondaryFunction = [{
				keyName: "PatientManagement",
				label: "病人管理",
				ENLabel: "病人管理"
			}, {
				keyName: "AutomaticMeasurement",
				label: "自动测量",
				ENLabel: "自动测量"
			}, {
				keyName: "TheWholeMachineParts",
				label: "整机部件",
				ENLabel: "整机部件"
			}, {
				keyName: "keyName",
				label: "按键",
				ENLabel: "按键"
			}, {
				keyName: "TowerBracket",
				label: "吊塔支架",
				ENLabel: "吊塔支架"
			}, {
				keyName: "HorizontalCollisionDetection",
				label: "水平碰撞检测",
				ENLabel: "水平碰撞检测"
			}, {
				keyName: "AirSourceInlet",
				label: "气源入口",
				ENLabel: "气源入口"
			}, {
				keyName: "EquipmentInstallation",
				label: "设备安装",
				ENLabel: "设备安装"
			}, {
				keyName: "InstrumentPanelAndUpperHalfComponents",
				label: "仪表面板与上半组件",
				ENLabel: "仪表面板与上半组件"
			}, {
				keyName: "SampleFrameTypeJudgment",
				label: "样本架类型判断",
				ENLabel: "样本架类型判断"
			}, {
				keyName: "ReagentStorage",
				label: "试剂存储",
				ENLabel: "试剂存储"
			}, {
				keyName: "ManualComputerControlledSwitch",
				label: "手动-机控开关",
				ENLabel: "手动-机控开关"
			}, {
				keyName: "COParameter",
				label: "CO参数",
				ENLabel: "CO参数"
			}, {
				keyName: "SampleNeedleLevelTest",
				label: "样本针液面检测",
				ENLabel: "样本针液面检测"
			}, {
				keyName: "PiCCOParameters",
				label: "PiCCO参数",
				ENLabel: "PiCCO参数"
			}, {
				keyName: "PatientCircuit",
				label: "病人回路",
				ENLabel: "病人回路"
			}, {
				keyName: "ClinicalAssistance",
				label: "临床辅助",
				ENLabel: "临床辅助"
			}, {
				keyName: "RadioFrequency",
				label: "无线射频",
				ENLabel: "无线射频"
			}, {
				keyName: "SampleDiscMotionControl",
				label: "样本盘运动控制",
				ENLabel: "样本盘运动控制"
			}, {
				keyName: "MicrofluidicCO2",
				label: "微流CO2",
				ENLabel: "微流CO2"
			}, {
				keyName: "MachineLabeling",
				label: "机器标贴",
				ENLabel: "机器标贴"
			}, {
				keyName: "LightSourceLampPowerSupply",
				label: "光源灯供电",
				ENLabel: "光源灯供电"
			}, {
				keyName: "SchedulingAlgorithm",
				label: "调度算法",
				ENLabel: "调度算法"
			}, {
				keyName: "RSO2Parameter",
				label: "rSO2参数",
				ENLabel: "rSO2参数"
			}, {
				keyName: "PressureRegulatingValve",
				label: "调压阀",
				ENLabel: "调压阀"
			}, {
				keyName: "ReagentAddition",
				label: "试剂加样",
				ENLabel: "试剂加样"
			}, {
				keyName: "OnlineUpgrade",
				label: "在线升级",
				ENLabel: "在线升级"
			}, {
				keyName: "3D6D",
				label: "3D/6D",
				ENLabel: "3D/6D"
			}, {
				keyName: "SpareBattery",
				label: "备用电池",
				ENLabel: "备用电池"
			}, {
				keyName: "PrintOut",
				label: "打印输出",
				ENLabel: "打印输出"
			}, {
				keyName: "AnesthesiaPrediction",
				label: "麻醉预测",
				ENLabel: "麻醉预测"
			}, {
				keyName: "OutputData",
				label: "输出数据",
				ENLabel: "输出数据"
			}, {
				keyName: "PlugInBox",
				label: "插件箱",
				ENLabel: "插件箱"
			}, {
				keyName: "InstallArm",
				label: "安装支臂",
				ENLabel: "安装支臂"
			}, {
				keyName: "KeepTheBasketAway",
				label: "提篮防脱",
				ENLabel: "提篮防脱"
			}, {
				keyName: "CleaningWaterTemperatureControlOfTheWholeMachine",
				label: "整机清洗水温度控制",
				ENLabel: "整机清洗水温度控制"
			}, {
				keyName: "PassiveAGSS",
				label: "被动AGSS",
				ENLabel: "被动AGSS"
			}, {
				keyName: "TheBasketIsCheckedOnTheMachine",
				label: "提篮在机检测",
				ENLabel: "提篮在机检测"
			}, {
				keyName: "UserInput",
				label: "用户输入",
				ENLabel: "用户输入"
			}, {
				keyName: "RespiratoryAccessories",
				label: "呼吸附件",
				ENLabel: "呼吸附件"
			}, {
				keyName: "NegativePressureSuctionAccessories",
				label: "负压吸引附件",
				ENLabel: "负压吸引附件"
			}, {
				keyName: "EMC",
				label: "EMC",
				ENLabel: "EMC"
			}, {
				keyName: "StartAutomatically",
				label: "自动开机启动",
				ENLabel: "自动开机启动"
			}, {
				keyName: "StirringCleaningMethod",
				label: "搅拌清洗方式",
				ENLabel: "搅拌清洗方式"
			}, {
				keyName: "3D5D",
				label: "3D/5D",
				ENLabel: "3D/5D"
			}, {
				keyName: "FaultHandling",
				label: "故障处理",
				ENLabel: "故障处理"
			}, {
				keyName: "CryogenicStorage",
				label: "低温储存",
				ENLabel: "低温储存"
			}, {
				keyName: "OphthalmologicalModel",
				label: "眼科模式",
				ENLabel: "眼科模式"
			}, {
				keyName: "StandbyCylinder",
				label: "备用气瓶",
				ENLabel: "备用气瓶"
			}, {
				keyName: "CleaningPressure",
				label: "清洗压力",
				ENLabel: "清洗压力"
			}, {
				keyName: "AbsorptionTank",
				label: "吸收罐",
				ENLabel: "吸收罐"
			}, {
				keyName: "SpectrophotometricAbility",
				label: "分光能力",
				ENLabel: "分光能力"
			}, {
				keyName: "VerticalCollisionDetection",
				label: "垂直碰撞检测",
				ENLabel: "垂直碰撞检测"
			}, {
				keyName: "CleaningAgent",
				label: "清洗剂清洗",
				ENLabel: "清洗剂清洗"
			}, {
				keyName: "SoftwareActivation",
				label: "软件激活",
				ENLabel: "软件激活"
			}, {
				keyName: "AutomaticInjection",
				label: "自动进样",
				ENLabel: "自动进样"
			}, {
				keyName: "CleaningAgentTemperatureControl",
				label: "清洗剂温度控制",
				ENLabel: "清洗剂温度控制"
			}, {
				keyName: "RMParameter",
				label: "RM参数",
				ENLabel: "RM参数"
			}, {
				keyName: "CleanWithWater",
				label: "清洗水清洗",
				ENLabel: "清洗水清洗"
			}, {
				keyName: "EEGParameters",
				label: "EEG参数",
				ENLabel: "EEG参数"
			}, {
				keyName: "3D4D",
				label: "3D/4D",
				ENLabel: "3D/4D"
			}, {
				keyName: "VentilationModeAndParameters",
				label: "麻醉消耗计算",
				ENLabel: "麻醉消耗计算"
			}, {
				keyName: "HyperbaricOxygenOutput",
				label: "高压氧输出",
				ENLabel: "高压氧输出"
			}, {
				keyName: "QualityControlCalibration",
				label: "质控定标",
				ENLabel: "质控定标"
			}, {
				keyName: "RemovingCrossContamination",
				label: "交叉污染解除",
				ENLabel: "交叉污染解除"
			}, {
				keyName: "Incubation",
				label: "孵育",
				ENLabel: "孵育"
			}, {
				keyName: "DrugDispenser",
				label: "加药器",
				ENLabel: "加药器"
			}, {
				keyName: "TheLevelOfReagentNeedleWasMeasured",
				label: "试剂针液面检测",
				ENLabel: "试剂针液面检测"
			}, {
				keyName: "NMTParameters",
				label: "NMT参数",
				ENLabel: "NMT参数"
			}, {
				keyName: "AlarmLamp",
				label: "报警灯",
				ENLabel: "报警灯"
			}, {
				keyName: "StrayLightControlOfReactionDisk",
				label: "反应盘杂散光控制",
				ENLabel: "反应盘杂散光控制"
			}, {
				keyName: "PowerCableAndInputSocket",
				label: "电源线缆与输入插座",
				ENLabel: "电源线缆与输入插座"
			}, {
				keyName: "EvaporatorParkingPosition",
				label: "蒸发器停放位",
				ENLabel: "蒸发器停放位"
			}, {
				keyName: "WideView",
				label: "宽景",
				ENLabel: "宽景"
			}, {
				keyName: "CallThePolice",
				label: "通气模式与参数",
				ENLabel: "通气模式与参数"
			}, {
				keyName: "AnesthesiaConsumptionCalculation",
				label: "",
				ENLabel: ""
			}, {
				keyName: "AirwayPressureGauge",
				label: "气道压力表",
				ENLabel: "气道压力表"
			}, {
				keyName: "LightSourceDormancyAndAwakening",
				label: "光源休眠与唤醒",
				ENLabel: "光源休眠与唤醒"
			}, {
				keyName: "TempParameter",
				label: "Temp参数",
				ENLabel: "Temp参数"
			}, {
				keyName: "Encoder",
				label: "编码器",
				ENLabel: "编码器"
			}, {
				keyName: "TM70",
				label: "TM70检测信息在中央站正确显示",
				ENLabel: "TM70检测信息在中央站正确显示"
			}, {
				keyName: "UIInterface",
				label: "UI交互界面",
				ENLabel: "UI交互界面"
			}, {
				keyName: "TheControlFunctionOfTheAnalysisDepartment",
				label: "分析部控制功能",
				ENLabel: "分析部控制功能"
			}, {
				keyName: "TheLiftingMechanism",
				label: "提升机构",
				ENLabel: "提升机构"
			}, {
				keyName: "InfraredEarTemperature",
				label: "红外耳温",
				ENLabel: "红外耳温"
			}, {
				keyName: "LookingBackAtTheData",
				label: "回顾数据",
				ENLabel: "回顾数据"
			}, {
				keyName: "SystemSelfCheck",
				label: "系统自检",
				ENLabel: "系统自检"
			}, {
				keyName: "BYPASS",
				label: "BYPASS",
				ENLabel: "BYPASS"
			}, {
				keyName: "SampleNeedleStrength",
				label: "样本针强度",
				ENLabel: "样本针强度"
			}, {
				keyName: "StirringPerformance",
				label: "搅拌性能",
				ENLabel: "搅拌性能"
			}, {
				keyName: "GasSourceMonitoring",
				label: "气源监测",
				ENLabel: "气源监测"
			}, {
				keyName: "OpticalMeasurement",
				label: "光学测量",
				ENLabel: "光学测量"
			}, {
				keyName: "SampleDiskRotationPositioning",
				label: "样本盘旋转定位",
				ENLabel: "样本盘旋转定位"
			}, {
				keyName: "TheBasketWasMisplaced",
				label: "提篮放错",
				ENLabel: "提篮放错"
			}, {
				keyName: "ICGParameters",
				label: "ICG参数",
				ENLabel: "ICG参数"
			}, {
				keyName: "ElasticImaging",
				label: "弹性成像",
				ENLabel: "弹性成像"
			}, {
				keyName: "StartUpSelfCheck",
				label: "开机自检",
				ENLabel: "开机自检"
			}, {
				keyName: "EquipmentInterconnection",
				label: "设备互联",
				ENLabel: "设备互联"
			}, {
				keyName: "StressEcho",
				label: "Stress Echo",
				ENLabel: "Stress Echo"
			}, {
				keyName: "ExhalationValve",
				label: "呼气阀",
				ENLabel: "呼气阀"
			}, {
				keyName: "AuxiliaryOutput",
				label: "辅助输出",
				ENLabel: "辅助输出"
			}, {
				keyName: "SampleBarCodeScanning",
				label: "样本条码扫描",
				ENLabel: "样本条码扫描"
			}, {
				keyName: "Probe",
				label: "探头",
				ENLabel: "探头"
			}, {
				keyName: "ReagentTrayMotionControl",
				label: "试剂盘运动控制",
				ENLabel: "试剂盘运动控制"
			}, {
				keyName: "AcoustoOpticAlarm",
				label: "声光报警",
				ENLabel: "声光报警"
			}, {
				keyName: "OrbitalDeviation",
				label: "轨道变轨",
				ENLabel: "轨道变轨"
			}, {
				keyName: "SystemSettings",
				label: "系统设置",
				ENLabel: "系统设置"
			}, {
				keyName: "DICOM",
				label: "DICOM",
				ENLabel: "DICOM"
			}, {
				keyName: "WorkingStatusHints",
				label: "工作状态提示",
				ENLabel: "工作状态提示"
			}, {
				keyName: "ReactionPlateMotionControl",
				label: "反应盘运动控制",
				ENLabel: "反应盘运动控制"
			}, {
				keyName: "NMT",
				label: "NMT",
				ENLabel: "NMT"
			}, {
				keyName: "ManualArmSupport",
				label: "手动支臂",
				ENLabel: "手动支臂"
			}, {
				keyName: "EquipmentMaintenance",
				label: "设备维护",
				ENLabel: "设备维护"
			}, {
				keyName: "DisplayFromScreen",
				label: "从屏显示",
				ENLabel: "从屏显示"
			}, {
				keyName: "ExternalAG",
				label: "外置AG",
				ENLabel: "外置AG"
			}, {
				keyName: "BypassCO2",
				label: "旁流CO2",
				ENLabel: "旁流CO2"
			}, {
				keyName: "CleaningMethod",
				label: "清洗方式",
				ENLabel: "清洗方式"
			}, {
				keyName: "BasketRecycling",
				label: "提篮回收",
				ENLabel: "提篮回收"
			}, {
				keyName: "PERIPHERALSAccessories",
				label: "外设&配附件",
				ENLabel: "外设&配附件"
			}, {
				keyName: "SampleAddition",
				label: "样本加样",
				ENLabel: "样本加样"
			}, {
				keyName: "LungRecruitment",
				label: "肺复张",
				ENLabel: "肺复张"
			}, {
				keyName: "Configuration",
				label: "配置、升级与维护",
				ENLabel: "配置、升级与维护"
			}, {
				keyName: "BlendWell",
				label: "混匀",
				ENLabel: "混匀"
			}, {
				keyName: "IStorage",
				label: "iStorage",
				ENLabel: "iStorage"
			}, {
				keyName: "Puncture",
				label: "穿刺",
				ENLabel: "穿刺"
			}, {
				keyName: "BIS",
				label: "BIS",
				ENLabel: "BIS"
			}, {
				keyName: "ThePositioningAccuracyOfTheReactionDisk",
				label: "反应盘定位精度",
				ENLabel: "反应盘定位精度"
			}, {
				keyName: "EvaporatorBase",
				label: "蒸发器基座",
				ENLabel: "蒸发器基座"
			}, {
				keyName: "UserAuthentication",
				label: "用户身份鉴别",
				ENLabel: "用户身份鉴别"
			}, {
				keyName: "MonitoringSystem",
				label: "监控系统",
				ENLabel: "监控系统"
			}, {
				keyName: "BellowsVE",
				label: "风箱/VE",
				ENLabel: "风箱/VE"
			}, {
				keyName: "SealUp",
				label: "密封",
				ENLabel: "密封"
			}, {
				keyName: "Evaporator",
				label: "蒸发器",
				ENLabel: "蒸发器"
			}, {
				keyName: "ResidualWaterControl",
				label: "残留水控制",
				ENLabel: "残留水控制"
			}, {
				keyName: "ReactionPlateTemperatureControl",
				label: "反应盘温控",
				ENLabel: "反应盘温控"
			}, {
				keyName: "MainControlPlatform",
				label: "主控平台",
				ENLabel: "主控平台"
			}, {
				keyName: "GeneralSecurity",
				label: "通用安全",
				ENLabel: "通用安全"
			}, {
				keyName: "FastOxygen",
				label: "快氧",
				ENLabel: "快氧"
			}, {
				keyName: "HostScheduling",
				label: "主机调度",
				ENLabel: "主机调度"
			}, {
				keyName: "BISParameters",
				label: "BIS参数",
				ENLabel: "BIS参数"
			}, {
				keyName: "ReagentInformationManagement",
				label: "试剂信息管理",
				ENLabel: "试剂信息管理"
			}, {
				keyName: "ActiveAGSS",
				label: "主动AGSS",
				ENLabel: "主动AGSS"
			}, {
				keyName: "TheWholeMachineIsPackaged",
				label: "整机包装",
				ENLabel: "整机包装"
			}, {
				keyName: "AbsorptionMeasurement",
				label: "吸光度测量",
				ENLabel: "吸光度测量"
			}, {
				keyName: "RelaxTheBasket",
				label: "提篮放松",
				ENLabel: "提篮放松"
			}, {
				keyName: "StoringData",
				label: "存储数据",
				ENLabel: "存储数据"
			}, {
				keyName: "TheReagentPlateWasRotatedAndPositioned",
				label: "试剂盘旋转定位",
				ENLabel: "试剂盘旋转定位"
			}, {
				keyName: "NGS",
				label: "NGS",
				ENLabel: "NGS"
			}, {
				keyName: "VenturiNegativePressureSuction",
				label: "文丘里负压吸引",
				ENLabel: "文丘里负压吸引"
			}, {
				keyName: "SetUpMaintenance",
				label: "设置维护",
				ENLabel: "设置维护"
			}, {
				keyName: "SampleInjectionPropulsion",
				label: "进样推进",
				ENLabel: "进样推进"
			}, {
				keyName: "EmergencyInjection",
				label: "急诊进样",
				ENLabel: "急诊进样"
			}, {
				keyName: "CleaningFlow",
				label: "清洗流量",
				ENLabel: "清洗流量"
			}, {
				keyName: "PowerReduction",
				label: "功率降额",
				ENLabel: "功率降额"
			}, {
				keyName: "TheModeOfLightSplitting",
				label: "分光方式",
				ENLabel: "分光方式"
			}, {
				keyName: "AtmosphericBottles",
				label: "大气瓶",
				ENLabel: "大气瓶"
			}, {
				keyName: "TheCartAndTheBase",
				label: "推车与底座",
				ENLabel: "推车与底座"
			}, {
				keyName: "MPMParameters",
				label: "MPM参数",
				ENLabel: "MPM参数"
			}, {
				keyName: "AlgorithmicParameters",
				label: "算法参数",
				ENLabel: "算法参数"
			}, {
				keyName: "TemperatureControl",
				label: "温度控制",
				ENLabel: "温度控制"
			}, {
				keyName: "BuiltInAG",
				label: "内置AG",
				ENLabel: "内置AG"
			}, {
				keyName: "Flowmeter",
				label: "流量计",
				ENLabel: "流量计"
			}, {
				keyName: "MobileInterconnection",
				label: "移动互联",
				ENLabel: "移动互联"
			}, {
				keyName: "CircuitHeating",
				label: "回路加热",
				ENLabel: "回路加热"
			}, {
				keyName: "Microdosage",
				label: "微量加样",
				ENLabel: "微量加样"
			}, {
				keyName: "SampleLocationAccuracy",
				label: "吸样定位精度",
				ENLabel: "吸样定位精度"
			}, {
				keyName: "ACGO",
				label: "ACGO",
				ENLabel: "ACGO"
			}, {
				keyName: "PluggingNeedleDetectionFunction",
				label: "堵针检测功能",
				ENLabel: "堵针检测功能"
			}, {
				keyName: "SuctionAndDrainagePower",
				label: "吸排液动力",
				ENLabel: "吸排液动力"
			}, {
				keyName: "ScvO2Parameter",
				label: "ScvO2参数",
				ENLabel: "ScvO2参数"
			}, {
				keyName: "AuxiliaryFlowmeter",
				label: "辅助流量计",
				ENLabel: "辅助流量计"
			}, {
				keyName: "DisplayComponents",
				label: "显示器组件",
				ENLabel: "显示器组件"
			}, {
				keyName: "SampleHolderRecovery",
				label: "样本架回收",
				ENLabel: "样本架回收"
			}, {
				keyName: "TheBasketIsFull",
				label: "提篮满检测",
				ENLabel: "提篮满检测"
			}, {
				keyName: "AGParameters",
				label: "AG参数",
				ENLabel: "AG参数"
			}, {
				keyName: "TargetAnesthesia",
				label: "目标麻醉",
				ENLabel: "目标麻醉"
			}, {
				keyName: "AfterPushingTheTest",
				label: "推完检测",
				ENLabel: "推完检测"
			}, {
				keyName: "AGSSAnnex",
				label: "AGSS附件",
				ENLabel: "AGSS附件"
			}, {
				keyName: "CleaningAgentAbsorbsAndDischargesPower",
				label: "清洗剂吸排动力",
				ENLabel: "清洗剂吸排动力"
			}, {
				keyName: "BasketInjection",
				label: "提篮进样",
				ENLabel: "提篮进样"
			}, {
				keyName: "WireConnectorOvercurrent",
				label: "线材/接插件过流",
				ENLabel: "线材/接插件过流"
			}, {
				keyName: "HomeScreenDisplay",
				label: "主屏显示",
				ENLabel: "主屏显示"
			}, {
				keyName: "PunctureNavigation",
				label: "穿刺导航",
				ENLabel: "穿刺导航"
			}, {
				keyName: "MainstreamCO2",
				label: "主流CO2",
				ENLabel: "主流CO2"
			}, {
				keyName: "InhalationValve",
				label: "吸气阀",
				ENLabel: "吸气阀"
			}, {
				keyName: "ParameterAcquisition",
				label: "参数采集",
				ENLabel: "参数采集"
			}, {
				keyName: "SamplePathPlanning",
				label: "样本路径规划",
				ENLabel: "样本路径规划"
			}, {
				keyName: "CO2Parameter",
				label: "CO2参数",
				ENLabel: "CO2参数"
			}, {
				keyName: "TrolleyParts",
				label: "台车部件",
				ENLabel: "台车部件"
			}, {
				keyName: "INeedle",
				label: "iNeedle",
				ENLabel: "iNeedle"
			}, {
				keyName: "SampleShelfTestSequenceProcessing",
				label: "样本架测试顺序处理",
				ENLabel: "样本架测试顺序处理"
			}, {
				keyName: "RemoteMaintenance",
				label: "远程维护",
				ENLabel: "远程维护"
			}, {
				keyName: "MicroopticalTesting",
				label: "微量光学测试",
				ENLabel: "微量光学测试"
			}, {
				keyName: "PowerManagement",
				label: "电源管理",
				ENLabel: "电源管理"
			}, {
				keyName: "Iworks",
				label: "iworks",
				ENLabel: "iworks"
			}, {
				keyName: "TheStatusOfTheBasketIsPrompted",
				label: "提篮状态提示",
				ENLabel: "提篮状态提示"
			}, {
				keyName: "Display",
				label: "显示屏",
				ENLabel: "显示屏"
			}, {
				keyName: "OvercurrentProtectionFunction",
				label: "过流保护功能",
				ENLabel: "过流保护功能"
			}, {
				keyName: "TouchScreen",
				label: "触摸屏",
				ENLabel: "触摸屏"
			}, {
				keyName: "SystemSwitch",
				label: "系统开关",
				ENLabel: "系统开关"
			}, {
				keyName: "ReagentReplacement",
				label: "试剂更换",
				ENLabel: "试剂更换"
			}, {
				keyName: "3D7D",
				label: "3D/7D",
				ENLabel: "3D/7D"
			}, {
				keyName: "AntiVirus",
				label: "防病毒",
				ENLabel: "防病毒"
			}, {
				keyName: "SampleFramePriorityProcessing",
				label: "样本架优先级处理",
				ENLabel: "样本架优先级处理"
			}, {
				keyName: "AirSourceHose",
				label: "气源软管",
				ENLabel: "气源软管"
			}, {
				keyName: "SamplesAreJudged",
				label: "样本有无判断",
				ENLabel: "样本有无判断"
			}, {
				keyName: "SampleShelfInPlaceJudgment",
				label: "样本架到位判断",
				ENLabel: "样本架到位判断"
			}, {
				keyName: "IndependentAttachmentPacking",
				label: "独立附件包装",
				ENLabel: "独立附件包装"
			}, {
				keyName: "ControlTiming",
				label: "控制时序",
				ENLabel: "控制时序"
			}, {
				keyName: "CCOSvO2Parameters",
				label: "CCO/SvO2参数",
				ENLabel: "CCO/SvO2参数"
			}, {
				keyName: "GasCapacity",
				label: "气容",
				ENLabel: "气容"
			}, {
				keyName: "SPO2Parameters",
				label: "SPO2参数",
				ENLabel: "SPO2参数"
			}, {
				keyName: "PackingLabels",
				label: "包装标贴",
				ENLabel: "包装标贴"
			}, {
				keyName: "AirSuctionDetectionFunction",
				label: "空吸检测功能",
				ENLabel: "空吸检测功能"
			}, {
				keyName: "APLValve",
				label: "APL阀",
				ENLabel: "APL阀"
			}, {
				keyName: "DCDC",
				label: "DC-DC",
				ENLabel: "DC-DC"
			}, {
				keyName: "AudioAlarm",
				label: "音频报警",
				ENLabel: "音频报警"
			}, {
				keyName: "ClockManagement",
				label: "时钟管理",
				ENLabel: "时钟管理"
			}, {
				keyName: "PipelineNegativePressureSuction",
				label: "管道负压吸引",
				ENLabel: "管道负压吸引"
			}, {
				keyName: "PowerSwitch",
				label: "电源开关",
				ENLabel: "电源开关"
			}, {
				keyName: "HighFlowOxygenSupply",
				label: "高流量给氧",
				ENLabel: "高流量给氧"
			}, {
				keyName: "PowerSupplyAndBatteryIndicatorLamp",
				label: "电源与电池指示灯",
				ENLabel: "电源与电池指示灯"
			}, {
				keyName: "LogStorage",
				label: "日志存储",
				ENLabel: "日志存储"
			}, {
				keyName: "IBPParameters",
				label: "IBP参数",
				ENLabel: "IBP参数"
			}, {
				keyName: "Workbench",
				label: "工作台",
				ENLabel: "工作台"
			}, {
				keyName: "AcceptData",
				label: "接受数据",
				ENLabel: "接受数据"
			}, {
				keyName: "ReactionCupTransshipment",
				label: "反应杯转运",
				ENLabel: "反应杯转运"
			}, {
				keyName: "SampleShelfBuffer",
				label: "样本架缓冲",
				ENLabel: "样本架缓冲"
			}, {
				keyName: "ACDC",
				label: "AC-DC",
				ENLabel: "AC-DC"
			}, {
				keyName: "ReactionCupLoading",
				label: "反应杯加载",
				ENLabel: "反应杯加载"
			}, {
				keyName: "ReagentBarCodeScanning",
				label: "试剂条码扫描",
				ENLabel: "试剂条码扫描"
			}, {
				keyName: "BarCodeScanning",
				label: "条码扫描",
				ENLabel: "条码扫描"
			}, {
				keyName: "Radiography",
				label: "造影",
				ENLabel: "造影"
			}, {
				keyName: "UpgradeAndMaintenance",
				label: "报警",
				ENLabel: "报警"
			}]
			// 三级功能
			Obj.threeLevelfunction = [{
				keyName: "4DProbe",
				label: "4D探头",
				ENLabel: "4D探头"
			}, {
				keyName: "RunningTips",
				label: "运行提示",
				ENLabel: "运行提示"
			}, {
				keyName: "MixingFunction",
				label: "混匀功能",
				ENLabel: "混匀功能"
			}, {
				keyName: "AntiCollision",
				label: "防撞",
				ENLabel: "防撞"
			}, {
				keyName: "ReagentRefrigeration",
				label: "试剂冷藏",
				ENLabel: "试剂冷藏"
			}, {
				keyName: "SampleShelfTypeJudgment",
				label: "样本架类型判断",
				ENLabel: "样本架类型判断"
			}, {
				keyName: "OpticalDesign",
				label: "光路设计",
				ENLabel: "光路设计"
			}, {
				keyName: "AnalogCircuitDesign",
				label: "模拟电路设计",
				ENLabel: "模拟电路设计"
			}, {
				keyName: "ReagentInformationRecognition",
				label: "试剂信息识别",
				ENLabel: "试剂信息识别"
			}, {
				keyName: "DailyMaintenance",
				label: "日常维护",
				ENLabel: "日常维护"
			}, {
				keyName: "Preheating",
				label: "预热",
				ENLabel: "预热"
			}, {
				keyName: "NumberOfEmergencyNumbers",
				label: "急诊位数量",
				ENLabel: "急诊位数量"
			}, {
				keyName: "SampleAspiration",
				label: "吸样",
				ENLabel: "吸样"
			}, {
				keyName: "ProcessScheduling",
				label: "流程调度",
				ENLabel: "流程调度"
			}, {
				keyName: "3DMPR",
				label: "3D MPR",
				ENLabel: "3D MPR"
			}, {
				keyName: "ReactionCupDesign",
				label: "反应杯设计",
				ENLabel: "反应杯设计"
			}, {
				keyName: "TouchScreen",
				label: "触摸屏",
				ENLabel: "触摸屏"
			}, {
				keyName: "CalibrationProcessAndStandards",
				label: "定标流程及标准",
				ENLabel: "定标流程及标准"
			}, {
				keyName: "IntelligentBasinBottom",
				label: "智能盆底",
				ENLabel: "智能盆底"
			}, {
				keyName: "LoadingTestTubeRack",
				label: "装载试管架",
				ENLabel: "装载试管架"
			}, {
				keyName: "Cleaning",
				label: "清洗",
				ENLabel: "清洗"
			}, {
				keyName: "KitSpecification",
				label: "试剂盒规格",
				ENLabel: "试剂盒规格"
			}, {
				keyName: "ThrowingCupPositionDesign",
				label: "抛杯位设计",
				ENLabel: "抛杯位设计"
			}, {
				keyName: "Notes",
				label: "分注",
				ENLabel: "分注"
			}, {
				keyName: "Magnetization",
				label: "磁化",
				ENLabel: "磁化"
			}, {
				keyName: "KitScheduling",
				label: "试剂盒调度",
				ENLabel: "试剂盒调度"
			}, {
				keyName: "Temperaturecharge",
				label: "温控控制",
				ENLabel: "温控控制"
			}, {
				keyName: "Battery",
				label: "电池",
				ENLabel: "电池"
			}, {
				keyName: "SmartV",
				label: "SmartV",
				ENLabel: "SmartV"
			}, {
				keyName: "DetectionAlgorithm",
				label: "检测算法",
				ENLabel: "检测算法"
			}, {
				keyName: "Static3D",
				label: "Static 3D",
				ENLabel: "Static 3D"
			}, {
				keyName: "Smart3D",
				label: "Smart 3D",
				ENLabel: "Smart 3D"
			}, {
				keyName: "SwitchingProcess",
				label: "开关机流程",
				ENLabel: "开关机流程"
			}, {
				keyName: "LiverFiberProbe",
				label: "肝纤维探头",
				ENLabel: "肝纤维探头"
			}, {
				keyName: "DisplaySupportArm",
				label: "显示器支撑臂",
				ENLabel: "显示器支撑臂"
			}, {
				keyName: "MarginManagement",
				label: "余量管理",
				ENLabel: "余量管理"
			}, {
				keyName: "SampleBarCodeScanning",
				label: "样本条码扫描",
				ENLabel: "样本条码扫描"
			}, {
				keyName: "GrabTheCupHandDrive",
				label: "抓杯手驱动",
				ENLabel: "抓杯手驱动"
			}, {
				keyName: "TemperatureControl",
				label: "温度控制",
				ENLabel: "温度控制"
			}, {
				keyName: "UnloadingTestTubeRack",
				label: "卸载试管架",
				ENLabel: "卸载试管架"
			}, {
				keyName: "BlendTime",
				label: "混匀时间",
				ENLabel: "混匀时间"
			}, {
				keyName: "SystemSelfChecking",
				label: "系统自检",
				ENLabel: "系统自检"
			}, {
				keyName: "AutomaticallyArrangeCups",
				label: "自动理杯",
				ENLabel: "自动理杯"
			}, {
				keyName: "MeasuringParameters",
				label: "测量参数",
				ENLabel: "测量参数"
			}, {
				keyName: "QualityControlProcessesAndStandards",
				label: "质控流程及标准",
				ENLabel: "质控流程及标准"
			}, {
				keyName: "CouplerHeater",
				label: "耦合剂加热器",
				ENLabel: "耦合剂加热器"
			}, {
				keyName: "HILDetection",
				label: "HIL检测",
				ENLabel: "HIL检测"
			}, {
				keyName: "PunctureStand",
				label: "穿刺架",
				ENLabel: "穿刺架"
			}, {
				keyName: "TrolleyCaster",
				label: "台车/脚轮",
				ENLabel: "台车/脚轮"
			}, {
				keyName: "SmartPlane",
				label: "Smart plane",
				ENLabel: "Smart plane"
			}, {
				keyName: "EnvironmentalControl",
				label: "环境控制",
				ENLabel: "环境控制"
			}, {
				keyName: "FootSwitch",
				label: "脚踏开关",
				ENLabel: "脚踏开关"
			}, {
				keyName: "DustNet",
				label: "防尘网",
				ENLabel: "防尘网"
			}, {
				keyName: "TeeProbe",
				label: "Tee探头",
				ENLabel: "Tee探头"
			}, {
				keyName: "FaultHandling",
				label: "故障处理",
				ENLabel: "故障处理"
			}, {
				keyName: "IntraoperativeProbe",
				label: "术中探头",
				ENLabel: "术中探头"
			}, {
				keyName: "ElectricLiftArm",
				label: "电动升降臂",
				ENLabel: "电动升降臂"
			}, {
				keyName: "InstrumentSettings",
				label: "仪器设置",
				ENLabel: "仪器设置"
			}, {
				keyName: "MixingEffect",
				label: "混匀效果",
				ENLabel: "混匀效果"
			}, {
				keyName: "Fan",
				label: "风扇",
				ENLabel: "风扇"
			}, {
				keyName: "TrolleyReeler",
				label: "台车卷线器",
				ENLabel: "台车卷线器"
			}, {
				keyName: "DoubleMicroConvexProbe",
				label: "双微凸探头",
				ENLabel: "双微凸探头"
			}, {
				keyName: "ReagentInformationDefinition",
				label: "试剂信息定义",
				ENLabel: "试剂信息定义"
			}, {
				keyName: "EmergencyFirst",
				label: "急诊优先",
				ENLabel: "急诊优先"
			}, {
				keyName: "CacheBitDesign",
				label: "缓存位设计",
				ENLabel: "缓存位设计"
			}, {
				keyName: "NumberOfReagentSites",
				label: "试剂位个数",
				ENLabel: "试剂位个数"
			}, {
				keyName: "ReagentStatusIndication",
				label: "试剂状态指示",
				ENLabel: "试剂状态指示"
			}, {
				keyName: "TestTubeStandFeeding",
				label: "试管架进给",
				ENLabel: "试管架进给"
			}, {
				keyName: "TestTubeShelfCache",
				label: "试管架缓存",
				ENLabel: "试管架缓存"
			}, {
				keyName: "ReactionCupLoading",
				label: "反应杯加载",
				ENLabel: "反应杯加载"
			}, {
				keyName: "STIC",
				label: "STIC",
				ENLabel: "STIC"
			}, {
				keyName: "WallBracket",
				label: "墙面支架",
				ENLabel: "墙面支架"
			}]
			// 来源类型
			Obj.sourceType = [{
					label: "安全特征判定",
					ENLabel: "SECURITYFEATURE",
					keyName: "SECURITYFEATURE"
				},
				{
					label: "标准",
					ENLabel: "STD",
					keyName: "STD"
				},
				{
					label: "DFMEA",
					ENLabel: "DFMEA",
					keyName: "DFMEA"
				},
				{
					label: "PFMEA",
					ENLabel: "PFMEA",
					keyName: "PFMEA"
				}, {
					label: "合理可预见误用(UFMEA)",
					ENLabel: "UFMEA",
					keyName: "UFMEA"
				}, {
					label: "类似产品信息（公司内部召回、主动更改）",
					ENLabel: "SPI",
					keyName: "SPI"
				}, {
					label: "文献",
					ENLabel: "LITERATURE",
					keyName: "LITERATURE"
				}
			]
			// 风险项分类
			Obj.riskItemType = [{
        label: "cyber security",
        ENLabel: "CYBERSECURITY",
        keyName: "CYBERSECURITY"
      }, {
        label: "易用性",
        ENLabel: "EASEOFUSE",
        keyName: "EASEOFUSE"
			}],
			// 专业方向
			Obj.category = [{
				label: "参数硬件",
				keyName: "MINDRAY_PARAMETRIC_HARDWARE"
			}, {
				label: "参数软件",
				keyName: "MINDRAY_PARAMETER_SOFTWARE"
			}, {
				label: "气路",
				keyName: "MINDRAY_GAS_LINE"
			}, {
				label: "硬件-板卡组",
				keyName: "MINDRAY_HARDWARE-BOARD_GROUP"
			}, {
				label: "硬件-电源组",
				keyName: "MINDRAY_HARDWARE-POWER_PACK"
			}, {
				label: "硬件-硬件测试组",
				keyName: "MINDRAY_HARDWARE-HARDWARE_TEST_GROUP"
			}, {
				label: "硬件-逻辑组",
				keyName: "MINDRAY_HARDWARE-LOGICAL_GROUP"
			}, {
				label: "硬件-底层驱动组",
				keyName: "MINDRAY_HARDWARE-THE_UNDERLYING_DRIVER_GROUP"
			}, {
				label: "硬件-技术预研组",
				keyName: "MINDRAY_HARDWARE-TECHNICAL_PRE-RESEARCH_GROUP"
			}, {
				label: "探头材料工艺组",
				keyName: "MINDRAY_PROBE_MATERIAL_PROCESS_GROUP"
			}, {
				label: "探头结构设计组",
				keyName: "MINDRAY_PROBE_STRUCTURE_DESIGN_GROUP"
			}, {
				label: "探头机械组",
				keyName: "MINDRAY_PROBE_MECHANICAL_GROUP"
			}, {
				label: "探头声学设计组",
				keyName: "MINDRAY_PROBE_ACOUSTIC_DESIGN_GROUP"
			}, {
				label: "探头产品组",
				keyName: "MINDRAY_PROBE_PRODUCT_GROUP"
			}, {
				label: "探头在线维护组",
				keyName: "MINDRAY_PROBE_ONLINE_MAINTENANCE_GROUP"
			}, {
				label: "声功率",
				keyName: "MINDRAY_SOUND_POWER"
			}, {
				label: "机械绝密组",
				keyName: "MINDRAY_MECHANICAL_TOP_SECRET_GROUP"
			}, {
				label: "硬件绝密组",
				keyName: "MINDRAY_HARDWARE_TOP_SECRET_GROUP"
			}, {
				label: "影像链",
				keyName: "MINDRAY_IMAGE_CHAIN"
			}, {
				label: "软件绝密组",
				keyName: "MINDRAY_SOFTWARE_TOP_SECRET_GROUP"
			}, {
				label: "需求(产品级需求)",
				keyName: "MINDRAY_DEMAND_PRODUCT_LEVEL_DEMAND"
			}, {
				label: "技术文档(手册)",
				keyName: "MINDRAY_TECHNICAL_DOCUMENTATION_MANUAL"
			}, {
				label: "试剂磁珠",
				keyName: "MINDRAY_REAGENT_MAGNETIC_BEADS"
			}, {
				label: "试剂酶标",
				keyName: "MINDRAY_REAGENT_LABEL"
			}, {
				label: "运动控制",
				keyName: "MINDRAY_SPORT_CONTROL"
			}, {
				label: "热工",
				keyName: "MINDRAY_THERMAL"
			}, {
				label: "软件开发",
				keyName: "MINDRAY_SOFTWARE_DEVELOPMENT"
			}, {
				label: "软件测试",
				keyName: "MINDRAY_SOFTWARE_TEST"
			}, {
				label: "整机测试",
				keyName: "MINDRAY_MACHINE_TEST"
			}, {
				label: "内部临床",
				keyName: "MINDRAY_INTERNAL_CLINICAL"
			}, {
				label: "项目管理",
				keyName: "MINDRAY_PROJECT_MANAGEMENT"
			}, {
				label: "试剂标贴设计",
				keyName: "MINDRAY_REAGENT_LABEL_DESIGN"
			}, {
				label: "知识产权",
				keyName: "MINDRAY_INTELLECTUAL_PROPERTY"
			}, {
				label: "试剂用服及临床应用",
				keyName: "MINDRAY_REAGENT_SERVICE_AND_CLINICAL_APPLICATION"
			}, {
				label: "试剂制造",
				keyName: "MINDRAY_REAGENT_MANUFACTURING"
			}, {
				label: "试剂开发",
				keyName: "MINDRAY_REAGENT_DEVELOPMENT"
			}, {
				label: "试剂校准质控",
				keyName: "MINDRAY_REAGENT_CALIBRATION_QUALITY_CONTROL"
			}, {
				label: "试剂原材料",
				keyName: "MINDRAY_REAGENT_RAW_MATERIAL"
			}, {
				label: "试剂验证与内部临床",
				keyName: "MINDRAY_REAGENT_VERIFICATION_AND_INTERNAL_CLINICAL"
			}, {
				label: "溯源标准化",
				keyName: "MINDRAY_TRACEABILITY_STANDARDIZATION"
			}, {
				label: "试剂设转",
				keyName: "MINDRAY_REAGENT_SETTING"
			}, {
				label: "手册说明书",
				keyName: "MINDRAY_MANUAL"
			}, {
				label: "包装设计",
				keyName: "MINDRAY_PACKAGE_DESIGN"
			}, {
				label: "硬件",
				keyName: "MINDRAY_HARDWARE"
			}, {
				label: "系统",
				keyName: "MINDRAY_SYSTEM"
			}, {
				label: "光学",
				keyName: "MINDRAY_OPTICS"
			}, {
				label: "机械",
				keyName: "MINDRAY_MACHINERY"
			}, {
				label: "液路",
				keyName: "MINDRAY_LIQUID_ROAD"
			}, {
				label: "试剂",
				keyName: "MINDRAY_REAGENT"
			}, {
				label: "算法",
				keyName: "MINDRAY_ALGORITHM"
			}, {
				label: "临床",
				keyName: "MINDRAY_CLINICAL"
			}, {
				label: "软件",
				keyName: "MINDRAY_SOFTWARE"
			}, {
				label: "整机验证",
				keyName: "MINDRAY_MACHINE_VERIFICATION"
			}, {
				label: "手册",
				keyName: "MINDRAY_MANUAL"
			}, {
				label: "工装",
				keyName: "MINDRAY_TOOLING"
			}, {
				label: "设计转换",
				keyName: "MINDRAY_DESIGN_CONVERSION"
			}, {
				label: "需求",
				keyName: "MINDRAY_DEMAND"
			}, {
				label: "产品安全",
				keyName: "MINDRAY_PRODUCT_SAFETY"
			}, {
				label: "工业设计",
				keyName: "MINDRAY_INDUSTRIAL_DESIGN"
			}, {
				label: "技术法规",
				keyName: "MINDRAY_TECHNICAL_REGULATIONS"
			}, {
				label: "包装标贴",
				keyName: "MINDRAY_PACKAGING_LABEL"
			}, {
				label: "装备开发",
				keyName: "MINDRAY_EQUIPMENT_DEVELOPMENT"
			}]
			//判定树的判定结果
			Obj.mdrResultOptions = [{
					keyName: 'Pending',
					label: that.$t('cmplReview.langFmOptPending')
				}, {
					keyName: 'MDR Not Required',
					label: that.$t('cmplReview.langFmOptMDRNotRequired')
				}, {
					keyName: '30 Day MDR Required',
					label: that.$t('cmplReview.langFmOpt30DayMDRRequired')
				}, {
					keyName: '5 Day MDR Required',
					label: that.$t('cmplReview.langFmOpt5DayMDRRequired')
				}
				// , {
				//     keyName: 'File ASR',
				//     label: that.$t('cmplReview.langFmOptFileASR')
				// }
			];

			//风险 ,keyName值跟label值保持一致
			Obj.riskSeverity = [{
					label: that.$t('common.riskSeverity.s1'),
					keyName: that.$t('common.riskSeverity.s1')
				},
				{
					label: that.$t('common.riskSeverity.s2'),
					keyName: that.$t('common.riskSeverity.s2')
				},
				{
					label: that.$t('common.riskSeverity.s3'),
					keyName: that.$t('common.riskSeverity.s3')
				},
				{
					label: that.$t('common.riskSeverity.s4'),
					keyName: that.$t('common.riskSeverity.s4')
				},
				{
					label: that.$t('common.riskSeverity.s5'),
					keyName: that.$t('common.riskSeverity.s5')
				}
			];
			//产线
			Obj.productLine = [ //keyName跟后台对应不要改
				{
					"label": that.$t('common.productLine.Anesthesia'),
					"keyName": "MZ"
				}, {
					"label": that.$t('common.productLine.BiochemistryAnalyzer'),
					"keyName": "BR"
				}, {
					"label": that.$t('common.productLine.BiochemicalReagents'),
					"keyName": "XQ"
				}, {
					"label": that.$t('common.productLine.CLIAReagents'),
					"keyName": "CR"
				}, {
					"label": that.$t('common.productLine.Common'),
					"keyName": "TY"
				},
				{
					"label": that.$t('common.productLine.DigitalRadiography'),
					"keyName": "SH"
				}, {
					"label": that.$t('common.productLine.HematologyAnalyzer'),
					"keyName": "HR"
				}, {
					"label": that.$t('common.productLine.HematologyReagents'),
					"keyName": "DR"
				}, {
					"label": that.$t('common.productLine.InfusionPump'),
					"keyName": "SK"
				},
				{
					"label": that.$t('common.productLine.PatientMonitoring'),
					"keyName": "JH"
				}, {
					"label": that.$t('common.productLine.Ultrasound'),
					"keyName": "CS"
				}
			];
			//swo 里的
			Obj.problemReproduced = [{
					"label": "Yes",
					"keyName": "true"
				},
				{
					"label": "No",
					"keyName": "false"
				}
			];
			Obj.callType = [{
				label: "CC Resolution",
				keyName: "CC Resolution"
			}, {
				label: "Contract SALES",
				keyName: "Contract SALES"
			}, {
				label: "Courtesy call",
				keyName: "Courtesy call"
			}, {
				label: "Expansion",
				keyName: "Expansion"
			}, {
				label: "Field Service",
				keyName: "Field Service"
			}, {
				label: "Installation",
				keyName: "Installation"
			}, {
				label: "NRC ONLY",
				keyName: "NRC ONLY"
			}, {
				label: "PM / PSI",
				keyName: "PM / PSI"
			}, {
				label: "Rental",
				keyName: "Rental"
			}, {
				label: "Repair",
				keyName: "Repair"
			}, {
				label: "Sale of Parts",
				keyName: "Sale of Parts"
			}, {
				label: "Service Repair QUOTE",
				keyName: "Service Repair QUOTE"
			}, {
				label: "Technical Support",
				keyName: "Technical Support"
			}];
			Obj.activityType = [{
				label: "Anesthesia and Ultrasound Installation",
				keyName: "Anesthesia and Ultrasound Installation"
			}, {
				label: "Benefit Hours",
				keyName: "Benefit Hours"
			}, {
				label: "Contract Accommodation",
				keyName: "Contract Accommodation"
			}, {
				label: "Contract Repair N/C",
				keyName: "Contract Repair N/C"
			}, {
				label: "Contract Sales",
				keyName: "Contract Sales"
			}, {
				label: "Demand Service",
				keyName: "Demand Service"
			}, {
				label: "Extended Warranty",
				keyName: "Extended Warranty"
			}, {
				label: "Equipment Repair Exchange Maintenance",
				keyName: "Equipment Repair Exchange Maintenance"
			}, {
				label: "Field Action",
				keyName: "Field Action"
			}, {
				label: "Part Exchange",
				keyName: "Part Exchange"
			}, {
				label: "Part Sale",
				keyName: "Part Sale"
			}, {
				label: "Parts Only Warranty",
				keyName: "Parts Only Warranty"
			}, {
				label: "Patient Monitoring Install",
				keyName: "Patient Monitoring Install"
			}, {
				label: "Rental",
				keyName: "Rental"
			}, {
				label: "Sales Advantage",
				keyName: "Sales Advantage"
			}, {
				label: "Sales Demo – Repair or Install",
				keyName: "Sales Demo – Repair or Install"
			}, {
				label: "Seminar",
				keyName: "Seminar"
			}, {
				label: "Service Advantage",
				keyName: "Service Advantage"
			}, {
				label: "Service Loan / Rental Repair",
				keyName: "Service Loan / Rental Repair"
			}, {
				label: "Service Warranty",
				keyName: "Service Warranty"
			}, {
				label: "Site Survey Central Station",
				keyName: "Site Survey Central Station"
			}, {
				label: "Software Upgrade N/C",
				keyName: "Software Upgrade N/C"
			}, {
				label: "Telephone Time",
				keyName: "Telephone Time"
			}, {
				label: "Training / Testing / Admin",
				keyName: "Training / Testing / Admin"
			}, {
				label: "Upgrade",
				keyName: "Upgrade"
			}, {
				label: "Upgrade Kit Service Labor",
				keyName: "Upgrade Kit Service Labor"
			}, {
				label: "Warranty",
				keyName: "Warranty"
			}];
			Obj.workOrderStatus = [{
				label: "New",
				keyName: "New"
			}, {
				label: "In Progress",
				keyName: "In Progress"
			}, {
				label: "Rejected",
				keyName: "Rejected"
			}, {
				label: "Submitted",
				keyName: "Submitted"
			}, {
				label: "On Hold",
				keyName: "On Hold"
			}, {
				label: "Error Sending to SAP",
				keyName: "Error Sending to SAP"
			}, {
				label: "Completed",
				keyName: "Completed"
			}, {
				label: "Closed",
				keyName: "Closed"
			}, {
				label: "Cannot Complete",
				keyName: "Cannot Complete"
			}, {
				label: "Canceled",
				keyName: "Canceled"
			}, {
				label: "Approved",
				keyName: "Approved"
			}];
			Obj.serviceRegion = [{
				label: "Atlantic",
				keyName: "Atlantic"
			}, {
				label: "Central",
				keyName: "Central"
			}, {
				label: "Northwest",
				keyName: "Northwest"
			}, {
				label: "South Central",
				keyName: "South Central"
			}, {
				label: "Southeast",
				keyName: "Southeast"
			}, {
				label: "West",
				keyName: "West"
			}, {
				label: "Reapir Depot",
				keyName: "Reapir Depot"
			}];
			Obj.caseStatus = [{
				label: "New",
				keyName: "New"
			}, {
				label: "In Progress",
				keyName: "In Progress"
			}, {
				label: "Customer Unit Received in NRC",
				keyName: "Customer Unit Received in NRC"
			}, {
				label: "Follow Up Required",
				keyName: "Follow Up Required"
			}, {
				label: "FSR Dispatched",
				keyName: "FSR Dispatched"
			}, {
				label: "NRC Working",
				keyName: "NRC Working"
			}, {
				label: "Open",
				keyName: "Open"
			}, {
				label: "Part RMA Received",
				keyName: "Part RMA Received"
			}, {
				label: "Parts Order Entered",
				keyName: "Parts Order Entered"
			}, {
				label: "Parts Order Requested",
				keyName: "Parts Order Requested"
			}, {
				label: "Ready to Ship Customer Unit",
				keyName: "Ready to Ship Customer Unit"
			}, {
				label: "Waiting for Customer Unit",
				keyName: "Waiting for Customer Unit"
			}, {
				label: "Waiting for PO",
				keyName: "Waiting for PO"
			}, {
				label: "Sales Support Working",
				keyName: "Sales Support Working"
			}, {
				label: "Action Required",
				keyName: "Action Required"
			}, {
				label: "Closed",
				keyName: "Closed"
			}, {
				label: "Closed - No Resolution",
				keyName: "Closed - No Resolution"
			}, {
				label: "Closed - Resolved",
				keyName: "Closed - Resolved"
			}];
			Obj.callDisposition = [{
				label: "Administrative",
				keyName: "Administrative"
			}, {
				label: "Clinical Assistance",
				keyName: "Clinical Assistance"
			}, {
				label: "Dispatch Assistance",
				keyName: "Dispatch Assistance"
			}, {
				label: "Parts Orders",
				keyName: "Parts Orders"
			}, {
				label: "Product Issue",
				keyName: "Product Issue"
			}, {
				label: "Request for Information",
				keyName: "Request for Information"
			}, {
				label: "Technical Assistance",
				keyName: "Technical Assistance"
			}]


			//抱怨状态
			Obj.status = [{
					"label": this.$t('qms.langTblMINDRAYINVESTIGATING'),
					"keyName": "MINDRAY_INVESTIGATING"
				}, {
					"label": this.$t('qms.langTblBYMDRPD'),
					"keyName": "BYMDRPD"
				},
				// {
				//     "label":this.$t('qms.langTblEVALUATION'),
				//     "keyName": "EVALUATION"
				// }, 
				{
					"label": this.$t('qms.langTblCLOSED'),
					"keyName": "CLOSED"
				}, {
					"label": this.$t('qms.langTblMINDRAYCLOSEDPENDING'),
					"keyName": "MINDRAY_CLOSED_PENDING"
				}
			];
			//CIR状态
			Obj.cirStatus = [{
				"label": that.$t('report.cirStatus.Initialize'),
				"keyName": "MINDRAY_INITIALIZE"
			}, {
				"label": that.$t('report.cirStatus.ReCreate'),
				"keyName": "MINDRAY_RECREATE"
			}, {
				"label": that.$t('report.cirStatus.Processing'),
				"keyName": "MINDRAY_PROCESSING"
			}, {
				"label": that.$t('report.cirStatus.REVIEW'),
				"keyName": "REVIEW"
			}, {
				"label": that.$t('report.cirStatus.Closed'),
				"keyName": "CLOSED"
			}, {
				"label": that.$t('report.cirStatus.Cancelled'),
				"keyName": "CAPACANCEL"
			}];

			//CIR组织架构
			Obj.solvingOrganization = [ //有很多默认是以这个数组第一位0为判断依据,不要改第一位的位置labei可改
				{
					label: "North America",
					keyName: "North America"
				}, {
					label: "Shenzhen",
					keyName: "Shenzhen"
				}
			];

			return Obj;
		};


		/**
		 *  整站时间过滤公共方法
		 */
		Vue.filter('formatTimeZone', function (value, noTime, timezoneFlag) {
			return dateTimeFomat(value, noTime, timezoneFlag);
		})
		Vue.prototype.formatTimeZone = function (value, noTime, timezoneFlag) {
			return dateTimeFomat(value, noTime, timezoneFlag);
		}

		function dateTimeFomat(time, noTime, timezoneFlag) {
			if (!time) {
				return ""
			}
			let offset = -8;
			if (timezoneFlag) {
				offset = 0;
			}
			//const offset = -8;//设置系统默认时区
			const localZone = new Date().getTimezoneOffset() / 60;
			let j = new Date(time);
			let d = j ? j : time.replace(/-/g, "/");
			const cTime = d.getTime() + (offset - localZone) * 60 * 60 * 1000; //换算后的时间戳
			let aTime = new Date(cTime);
			let bTime = `${aTime.getMonth() < 9 ? "0" + (aTime.getMonth() + 1) : aTime.getMonth() + 1}/${aTime.getDate() < 10 ? "0" + aTime.getDate() : aTime.getDate()}/${aTime.getFullYear()}  ${aTime.getHours() < 10 ? "0" + aTime.getHours() : aTime.getHours()}:${aTime.getMinutes() < 10 ? "0" + aTime.getMinutes() : aTime.getMinutes()}:${aTime.getSeconds() < 10 ? "0" + aTime.getSeconds() : aTime.getSeconds()}`
			if (time.indexOf(":") < 0 || noTime) { //不带小时分秒
				return bTime.split(" ")[0];
			} else {
				return bTime;
			}

		}

		/*            if(!time){
		                return ""
		            }
		            const offset=8;//创建一个Date对象 time时间 offset 时区  中国为  8
		            let j=new Date(time);
		            let d=j?j:time.replace(/-/g, "/");
		            let localTime = d.getTime();
		            let localOffset=d.getTimezoneOffset()*60000; //获得当地时间偏移的毫秒数
		            let utc = localTime + localOffset; //utc即GMT时间
		            let aTime= new Date(utc + (3600000*offset));
		            let bTime = `${aTime.getMonth() < 9 ? "0" + (aTime.getMonth() + 1) : aTime.getMonth() + 1}/${aTime.getDate() < 10 ? "0" + aTime.getDate() : aTime.getDate()}/${aTime.getFullYear()}  ${aTime.getHours() < 10 ? "0" + aTime.getHours() : aTime.getHours()}:${aTime.getMinutes() < 10 ? "0" + aTime.getMinutes() : aTime.getMinutes()}:${aTime.getSeconds() < 10 ? "0" + aTime.getSeconds() : aTime.getSeconds()}`;
		            if(time.indexOf(":")<0||noTime){//不带小时分秒
		                return bTime.split(" ")[0];
		            }else {
		                return bTime;
		            }
		        }*/
	}
};