module.exports = {
	types: [
		{ value: 'feat', name: 'feat:     增加新功能' },
		{ value: 'fix', name: 'fix:      修复bug' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
    { value: 'chore', name: 'chore:    更改配置文件' },
		{ value: 'style', name: 'style:    代码格式修改不影响逻辑' },
		{ value: 'revert', name: 'revert:   版本回退' },
		{ value: 'add', name: 'add:      添加依赖' },
		{ value: 'delete', name: 'delete:   删除代码/文件' },
		{ value: 'ui', name: 'ui:       更新UI' },
    { value: 'merge', name: 'merge:    合并分支' },
    { value: 'init', name: 'init:     初始提交' },
		{ value: 'release', name: 'release:  发布' },
		{ value: 'deploy', name: 'deploy:   部署' },
		{ value: 'docs', name: 'docs:     修改文档' },
		{ value: 'test', name: 'test:     增删测试' },
	],
	scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['hips-ui', '对 hips-ui 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['auth', '对 auth 修改'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    // ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),
  // 交互提示信息
	messages: {
		type: '确保本次提交遵循：前端代码规范！\n选择你要提交的类型：',
    scope: '\n选择一个 scope（可选）：',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope：',
    subject: '填写简短精炼的变更描述（工单号+简单描述）：\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\n',
    confirmCommit: '确认提交？'
	},
	allowCustomScopes: true, // 是否允许自定义scope
	allowBreakingChanges: ['feat', 'fix'], // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  subjectLimit: 100, // subject 限制长度
  breaklineChar: '|' // 换行符，支持 body 和 footer
}