

/*====================================================*/
/*  Description : Cookies Class����(���� JSON)             */
/*  Writer         : ĳ��                                                   */
/*  Date          : 2009-10-29                                           */
/*  Example     : var test = new Cookies                         */
/*                     test.setCookie("userName","ĳ��",1)      */
/*====================================================*/
Cookies = function(){}
Cookies.prototype =
{  
  getCookieVal: function(offset)
  {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
  },

  //��Ű�� �б�
  getCookie : function(cookieName)
  {
    var arg = cookieName + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    
    while (i < clen)
    {
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg) return getCookieVal (j);
      i = document.cookie.indexOf(" ", i) + 1; if (i == 0) break;
    }
    return null;  
  },

  //��Ű����(������ ����)  ������(expiredays) : 1 = 1�� , 365 = 365��
  setCookie: function(cookieName, value, expiredays)
  {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = cookieName + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"; 
  },

  //��Ű����(������ ���� : â������ �ڵ����� ��Ű������)
  setCookieNoExp: function(cookieName, value)
  {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate());
    document.cookie = cookieName + "=" + escape( value ) + "; path=/;";
  },
  
  //��Ű����
  removeCookie: function(cookieName)
  {
    var expireDate = new Date();

    //���� ��¥�� ��Ű �Ҹ� ��¥�� �����Ѵ�.
    expireDate.setDate( expireDate.getDate() - 1 );
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
  }
}



