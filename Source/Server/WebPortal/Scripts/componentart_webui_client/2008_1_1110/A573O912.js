if(!window.ComponentArt_SpellCheck_Loaded){window.ComponentArt_SpellCheck=function(id){this.Id=id;this.element=this.DomElement=document.getElementById(id);if(window.ComponentArt_Atlas){ComponentArt.Web.UI.SpellCheck.initializeBase(this,[this.element]);this.getDescriptor=function(){return _qEF(this.constructor);};}};ComponentArt_SpellCheck.prototype.PublicProperties=["Id","IgnoreAcronyms","IgnoreEmailAddresses","IgnoreNonAlphabetic","IgnoreURLs","SpellSuggestionDepth"];ComponentArt_SpellCheck.prototype.PublicMethods=[["Add",,null,[["word",String]]],["AddToDictionary",,null,[["text",String],["checkResult",Array],["errorIndex",Number]]],["Change",,null,[["text",String],["checkResult",Array],["errorIndex",Number],["replacementWord",String]]],["ChangeAll",,null,[["text",String],["checkResult",Array],["errorIndex",Number],["replacementWord",String]]],["Check",,null,[["text",String]]],["DialogAdd"],["DialogBegin"],["DialogChange"],["DialogChangeAll"],["DialogClose"],["DialogIgnore"],["DialogIgnoreAll"],["GetError",,null,[["index",Number]]],["GetSuggestions",,null,[["word",String]]],["Ignore",,null,[["text",String],["checkResult",Array],["errorIndex",Number]]],["IgnoreAll",,null,[["text",String],["checkResult",Array],["errorIndex",Number]]]];ComponentArt_SpellCheck.prototype.PublicEvents=[["DialogUpdateNeeded"],["DialogComplete"],["Load"]];_qEE(ComponentArt_SpellCheck,"this");window.ComponentArt.Web.UI.SpellCheck=window.ComponentArt_SpellCheck;if(window.ComponentArt_Atlas){ComponentArt.Web.UI.SpellCheck.registerClass("ComponentArt.Web.UI.SpellCheck",Sys.UI.Control);if(Sys.TypeDescriptor){Sys.TypeDescriptor.addType("componentArtWebUI","spellCheck",ComponentArt.Web.UI.SpellCheck);}}ComponentArt_SpellCheck.prototype.GetProperty=function(_2){return this[_2];};ComponentArt_SpellCheck.prototype.SetProperty=function(_3,_4){this[_3]=_4;};ComponentArt_SpellCheck.prototype.Add=function(_5){this.Callback(_5,"add");};ComponentArt_SpellCheck.prototype.AddToDictionary=function(_6,_7,_8){if(!_7){_7=this.CheckResult;}var _9=_7[_8][0];this.Add(_9);};ComponentArt_SpellCheck.prototype.AdjustPaths=function(_a,_b,_c){var _d=_a[_b][3];for(var i=_b+1;i<_a.length;i++){if(_a[i]){var _f=_a[i][3];if(_f.length>=_d.length){if(_f.slice(0,_d.length-1).toString()==_d.slice(0,_d.length-1).toString()){_f[_d.length-1]+=_c;}}}}};ComponentArt_SpellCheck.prototype.Callback=function(_10,cmd,_12,_13){var _14=true;var _15="text="+encodeURIComponent(_10);if(!_12){_12=this.DefaultLanguage;}var url=this.CallbackUrl+"?lang="+_12+"&cmd="+cmd;if(cmd=="suggest"){url+="&sd="+this.SpellSuggestionDepth+"&ms="+this.MaxSuggestions;}else{if(cmd=="check"){if(this.IgnoreAcronyms){url+="&iga=1";}if(this.IgnoreEmailAddresses){url+="&ige=1";}if(this.IgnoreNonAlphabetic){url+="&igna=1";}if(this.IgnoreURLs){url+="&igu=1";}}}var _17=this;var _18=false;var _19;var _1a=null;function Cleanup(){_17.CallingBack=false;switch(cmd){case "check":_17.HandleCheckComplete(_10,_1a);break;case "suggest":_17.HandleSuggestComplete(_10,_1a);break;default:break;}if(_13){_13(_1a);}}function _q19E(){if(_19.readyState&&_19.readyState!=4&&_19.readyState!="complete"){return;}var _1b=_18?_19.responseXML:_19;if(_1b&&_1b.documentElement&&_1b.documentElement.childNodes.length==1){var _1c=_1b.documentElement.childNodes[0];if(_1c.nodeName=="SpellError"){var _1d=_1c.nodeValue;alert("Callback error:\n"+_1d);}else{var _1e=_1c.nodeValue;_1a=eval(_1e);if(_1a){_1a.SpellCheck=_17;}}}else{if(_19.status&&_19.status!=200&&_19.responseText){document.body.innerHTML=_19.responseText;}else{alert("Error loading callback data.");}}Cleanup();}this.CallingBack=true;if(window.XMLHttpRequest){_18=true;var _19=new XMLHttpRequest();_19.onreadystatechange=_q19E;_19.open("POST",url,true);_19.setRequestHeader("Content-Type","application/x-www-form-urlencoded");_19.send(_15);}else{if(document.implementation&&document.implementation.createDocument){_19=document.implementation.createDocument("","",null);_19.onload=_q19E;}else{if(cart_browser_ie){if(window.ActiveXObject){try{_19=new ActiveXObject("Microsoft.XMLHTTP");_19.onreadystatechange=_q19E;_19.open("POST",url,true);_19.setRequestHeader("Content-Type","application/x-www-form-urlencoded");_19.send(_15);_18=true;}catch(ex){}}if(_19==null){var _1f=this.Id+"_island";var _20=document.getElementById(_1f);if(!_20){_20=document.createElement("xml");_20.id=_1f;document.body.appendChild(_20);}if(_20.XMLDocument){_19=_20.XMLDocument;_19.onreadystatechange=_q19E;}else{return false;}}}else{return false;}}}if(!_18){_19.async=true;try{_19.load(url+"&"+_15);}catch(ex){Cleanup();alert("Data not loaded: "+(ex.message?ex.message:ex));}}return true;};ComponentArt_SpellCheck.prototype.Change=function(_21,_22,_23,_24){if(!_22){_22=this.CheckResult;}if(_22.length<=_23||_23<0||!_22[_23]){return;}var _25=null;if(this.ControlToCheck){_25=this.GetTargetElement(this.ControlToCheck);}var _26=_22[_23];var _27=_26[0];var _28=_26[1];var _29=_26[2];var _2a=_26[3];if(!_21&&_25){_21=_25.value;}var _2b=null;if(_21&&!_2a){var _2c=_24.length-_27.length;_2b=_21.substring(0,_28)+_24+_21.substring(_29);for(var i=_23+1;i<_22.length;i++){if(_22[i]){_22[i][1]+=_2c;_22[i][2]+=_2c;}}if(_25){_25.value=_2b;}}else{if(_2a){var o=_25;for(var i=0;i<_2a.length;i++){o=o.childNodes[_2a[i]];}o.nodeValue=o.nodeValue+_24+o.nextSibling.nextSibling.nodeValue;_qF2(o.nextSibling);_qF2(o.nextSibling);this.AdjustPaths(_22,_23,-2);}}_22[_23]=null;return _2b;};ComponentArt_SpellCheck.prototype.ChangeAll=function(_2f,_30,_31,_32){if(!_30){_30=this.CheckResult;}var _33=_30[_31][0];for(var i=0;i<_30.length;i++){if(_30[i]&&_30[i][0]==_33){this.Change(_2f,_30,i,_32);}}};ComponentArt_SpellCheck.prototype.Check=function(_35,_36){if(!_35){_35=this.GetText();}if(_35){this.Callback(_35,"check",this.DefaultLanguage,_36);}};ComponentArt_SpellCheck.prototype.CleanTarget=function(_37){if(this.ControlToCheck){var _38=this.GetTargetElement(this.ControlToCheck);if(_38&&_38.ComponentArtSpellInline){for(var i=_37.length-1;i>=0;i--){var _3a=this.GetHighlightedWord(_38,_37,i);if(_3a&&_3a.nodeName=="SPAN"){_3a.parentNode.replaceChild(_3a.firstChild,_3a);}}}}};ComponentArt_SpellCheck.prototype.DialogAdd=function(_3b){if(!_3b){_3b=this.CheckResult[this.CurrentError][0];}this.Add(_3b);this.Ignore(null,this.CheckResult,this.CurrentError);this.DialogMoveNext();};ComponentArt_SpellCheck.prototype.DialogBegin=function(){this.CurrentError=0;if(!this.CheckResult||this.CurrentError>=this.CheckResult.length){this.DialogFinish();return false;}this.DialogUpdate();return true;};ComponentArt_SpellCheck.prototype.DialogChange=function(_3c){if(_3c){this.Change(null,this.CheckResult,this.CurrentError,_3c);this.DialogMoveNext();}};ComponentArt_SpellCheck.prototype.DialogChangeAll=function(_3d){if(_3d){this.ChangeAll(null,this.CheckResult,this.CurrentError,_3d);this.DialogMoveNext();}};ComponentArt_SpellCheck.prototype.DialogClose=function(){this.CleanTarget(this.CheckResult);};ComponentArt_SpellCheck.prototype.DialogFinish=function(){var _3e=this.get_events().getHandler("dialogComplete");if(_3e){_3e(this,Sys.EventArgs.Empty);}this.DialogClose();};ComponentArt_SpellCheck.prototype.DialogGetErrorsHtml=function(){return this.GetErrorsHtml(null,this.CheckResult,this.CurrentError);};ComponentArt_SpellCheck.prototype.DialogGetSuggestions=function(_3f){this.GetSuggestions(this.CheckResult[this.CurrentError][0],_3f);};ComponentArt_SpellCheck.prototype.DialogIgnore=function(){this.Ignore(null,this.CheckResult,this.CurrentError);this.DialogMoveNext();};ComponentArt_SpellCheck.prototype.DialogIgnoreAll=function(){this.IgnoreAll(null,this.CheckResult,this.CurrentError);this.DialogMoveNext();};ComponentArt_SpellCheck.prototype.DialogMoveNext=function(){this.CurrentError++;if(!this.CheckResult||this.CurrentError>=this.CheckResult.length){this.DialogFinish();return;}else{if(!this.CheckResult[this.CurrentError]){this.DialogMoveNext();return;}}this.DialogUpdate();};ComponentArt_SpellCheck.prototype.DialogSuggestionChange=function(_40,_41){var _42=document.getElementById(_40);if(_42){var _43=document.getElementById(_41);if(_43){_43.value=_42.options[_42.selectedIndex].text;}}};ComponentArt_SpellCheck.prototype.DialogUpdate=function(){var _44=this.get_events().getHandler("dialogUpdateNeeded");if(_44){_44(this,Sys.EventArgs.Empty);}};ComponentArt_SpellCheck.prototype.GetContextMenu=function(){if(this.ContextMenuId){var _45=window[this.ContextMenuId];if(_45){if(!_45.get_events().getHandler("itemSelect")){_45.get_events().addHandler("itemSelect",new Function("sender","eventArgs",this.Id+".HandleContextMenuSelect(sender, eventArgs)"));}if(!this.ContextMenuItems){this.ContextMenuItems=[];var _46=_45.get_items().get_itemArray();for(var i=0;i<_46.length;i++){this.ContextMenuItems[this.ContextMenuItems.length]=_46[i];}}return _45;}}return null;};ComponentArt_SpellCheck.prototype.GetErrorsHtml=function(_48,_49,_4a){if(!_48){if(this.ControlToCheck){var _4b=this.GetTargetElement(this.ControlToCheck);if(_4b){if(_4b.value){_48=_4b.value;}}}}if(_48){var _4c=[];var _4d=0;for(var i=0;i<_49.length;i++){if(_49[i]&&!((_4a||_4a==0)&&_4a!=i)){var _4f=_49[i][1];var _50=_49[i][2];_4c[_4c.length]=_48.substring(_4d,_4f);_4c[_4c.length]="<span id=\""+this.Id+"_CurrentError\" class=\""+this.ErrorCssClass+"\">"+_48.substring(_4f,_50)+"</span>";_4d=_50;}}_4c[_4c.length]=_48.substring(_4d);return _4c.join("");}else{var _4b=this.GetTargetElement(this.ControlToCheck);if(_4b.ComponentArtSpellInline){var obj=document.createElement("div");obj.innerHTML=_4b.innerHTML;var _52=this.GetHighlightedWord(obj,_49,_4a);return _52.parentNode.innerHTML;}else{return _4b.innerHTML;}}return "";};ComponentArt_SpellCheck.prototype.GetHighlightedWord=function(_53,_54,num){var _56=_54[num];if(!_56){return;}var _57=_56[3];if(!_57){return;}var o=_53;for(var i=0;i<_57.length;i++){o=o.childNodes[_57[i]];}return o.nextSibling?o.nextSibling:o;};ComponentArt_SpellCheck.prototype.get_numErrors=function(){return this.CheckResult?this.CheckResult.length:0;};ComponentArt_SpellCheck.prototype.GetError=function(_5a){return this.CheckResult&&this.CheckResult.length>_5a&&this.CheckResult[_5a]?this.CheckResult[_5a][0]:null;};ComponentArt_SpellCheck.prototype.GetSuggestions=function(_5b,_5c){this.Callback(_5b,"suggest",this.DefaultLanguage,_5c);};ComponentArt_SpellCheck.prototype.GetTargetElement=function(id){var _5e=null;if(window[id]){var obj=window[id];if(window.ComponentArt_Editor&&obj instanceof ComponentArt_Editor){_5e=obj.document.body;}else{if(obj.element){_5e=obj.element;}else{if(obj.nodeName){return obj;}}}}else{_5e=document.getElementById(id);}return _5e;};ComponentArt_SpellCheck.prototype.GetText=function(){if(this.ControlToCheck){var _60=this.GetTargetElement(this.ControlToCheck);if(_60){if(_60.value){return _60.value;}else{if(_60.childNodes.length>0){var _61=[];this.GetTextFromDom(_60,_61,[]);return _61.join("\x00");}}}}return "";};ComponentArt_SpellCheck.prototype.GetTextFromDom=function(_62,_63,_64){if(_62.ComponentArtSpellError){return;}for(var i=0;i<_62.childNodes.length;i++){if(_62.childNodes[i].nodeName=="#text"){var _66=_62.childNodes[i].nodeValue;if(_66.replace(/^\s+|\s+$/g,"")){_63[_63.length]=_64.concat(i).join(",")+"\x00"+_66;}}else{if(_62.childNodes[i].childNodes.length>0){this.GetTextFromDom(_62.childNodes[i],_63,_64.concat(i));}}}};ComponentArt_SpellCheck.prototype.HandleContextMenuSelect=function(_67,_68){var _69=_68.get_item();var _6a=_69.get_value();if(_6a){_6a=_6a.toLowerCase();}switch(_6a){case "change":this.Change(null,null,_67.get_contextData(),_69.get_text());break;case "add":this.Add(_69.get_text());this.IgnoreAll(null,null,_67.get_contextData());break;case "ignoreall":this.IgnoreAll(null,null,_67.get_contextData());break;default:break;}};ComponentArt_SpellCheck.prototype.HandleCheckComplete=function(_6b,_6c){var _6d={"INPUT":1,"SELECT":1,"TEXTAREA":1};this.CheckResult=_6c;if(this.ControlToCheck){var _6e=this.GetTargetElement(this.ControlToCheck);if(!_6d[_6e.nodeName]){_6e.ComponentArtSpellInline=true;for(var i=_6c.length-1;i>=0;i--){this.HighlightWord(_6e,_6c,i);}}}};ComponentArt_SpellCheck.prototype.HandleErrorClick=function(e,_71,num){if(cart_browser_ie){e=event;}var _73=this.Id+"_ContextMenu";var sc=this;var evt=new Object();for(i in e){evt[i]=e[i];}function SuggestComplete(_76){var _77=sc.GetContextMenu();if(_77){_77.beginUpdate();_77.get_items().clear();if(_76.length==0){var _78=new ComponentArt.Web.UI.MenuItem();_78.set_text("(no suggestions)");_78.set_enabled(false);_77.get_items().add(_78);}else{for(var i=0;i<_76.length;i++){var _78=new ComponentArt.Web.UI.MenuItem();_78.set_text(_76[i]);_78.set_value("change");_77.get_items().add(_78);}}for(var i=0;i<sc.ContextMenuItems.length;i++){_77.get_items().add(sc.ContextMenuItems[i]);}_77.endUpdate();_77.showContextMenu(evt,num);}}this.GetSuggestions(_71,SuggestComplete);};ComponentArt_SpellCheck.prototype.HandleSuggestComplete=function(_7a,_7b){};ComponentArt_SpellCheck.prototype.HighlightWord=function(_7c,_7d,num){var _7f=_7d[num];if(!_7f){return;}var _80=_7f[0];var _81=_7f[1];var end=_7f[2];var _83=_7f[3];if(!_83){return;}var o=_7c;for(var i=0;i<_83.length;i++){o=o.childNodes[_83[i]];}var _86=o.nodeValue;var _87=_86.substring(0,_81);var _88=_86.substring(end);o.nodeValue=_87;var _89=_7c.ownerDocument.createElement("span");_89.className=this.ErrorCssClass;_89.onclick=new Function("event",this.Id+".HandleErrorClick(event, \""+_80+"\", "+num+");");_89.ComponentArtSpellError=true;_89.innerHTML=_80;var _8a=o.cloneNode(false);_8a.nodeValue=_88;o.parentNode.insertBefore(_89,o.nextSibling);o.parentNode.insertBefore(_8a,_89.nextSibling);this.AdjustPaths(_7d,num,2);return _89;};ComponentArt_SpellCheck.prototype.Ignore=function(_8b,_8c,_8d){if(!_8c){_8c=this.CheckResult;}var _8e=_8c[_8d];if(!_8e){return;}var _8f=_8e[0];this.Change(_8b,_8c,_8d,_8f);};ComponentArt_SpellCheck.prototype.IgnoreAll=function(_90,_91,_92){if(!_91){_91=this.CheckResult;}var _93=_91[_92][0];for(var i=0;i<_91.length;i++){if(_91[i]&&_91[i][0]==_93){this.Ignore(_90,_91,i);}}};ComponentArt_SpellCheck.prototype.Initialize=function(){_q131(this);var _95=this.get_events().getHandler("load");if(_95){_95(this,Sys.EventArgs.Empty);}};window.ComponentArt_SpellCheck_Loaded=true;}