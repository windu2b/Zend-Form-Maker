$(document).ready(function(){(function(a){a.ElUpdateManager={getEditDialogDatas:function(b){var c=a.ElementManager.getFormFilename();a.ajaxCalls.getEditDialogDatas({id:b,formFilename:c})},getEditDialogDatasCallback:function(b){id=b["@attributes"].id;b.id=id;var c="Edit element "+b.name+"("+id+")";a.ElUpdateManager.updateDialogTitle(b.id,b.name);a(a.ZFM.subSelectors.editElementTabs).tabs("select",0);a(a.ZFM.selectors.editElementDialogForm).dialog("option","title",c).dialog("open");a.TabGeneral.init(b);
a.TabValidators.init(b);a.TabFilters.init(b);a.TabOptions.init(b);a.TabDecorators.init(b);a(a.ZFM.selectors.editElementDialogForm+" #elementName").focus()},refreshElement:function(b,c){var e=a.ElementManager.buildSortableElement(c,b),d="."+a.ZFM.className.sortableElement+"_"+b;a(d).replaceWith(e);a.ElementManager.addCMSortableElement(b);a(d).effect("highlight");a("."+a.ZFM.className.sortableHandle+":hidden").length>0&&a("."+a.ZFM.className.sortableHandle).hide()},updateDialogTitle:function(){}}})(jQuery)});