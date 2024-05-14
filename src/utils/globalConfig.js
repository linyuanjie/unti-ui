const GlobalConfig = {
  /**
 * d365id登陆地址（跳转登录）
 */
  //uat
  d365IdLoginUrl: href => 'https://uss-test.lenovomm.cn/webauthn/preLogin?webauthn_action=uilogin&webauthn_realm=bpportal.velocity.lenovo.com&webauthn_lang=null&webauthn_state=null&webauthn_callback=' + href,
  //prod
  // d365IdLoginUrl: href => 'https://bpsso.lenovo.com/webauthn/preLogin?webauthn_action=uilogin&webauthn_realm=financeapps-web.lenovo.com&webauthn_lang=null&webauthn_state=null&webauthn_callback=' + href,
  //uat
  d365IdLoginOutUrl: 'https://uss-test.lenovomm.cn/webauthn/userLogout',
  //prod
  // d365IdLoginOutUrl: 'https://bpsso.lenovo.com/webauthn/userLogout',
}

export default GlobalConfig
