$(document).ready(function(){(function(a){a.ZFM={};a.ZFM.selectors={elementDraggableContainer:"#elementSidebar",elements1:"#elementFirstPart",elements2:"#elementSecondPart",showHideElements:"#showHideElementGroup",sortableArea:"#formRenderAreaContent",trash:"#trash",editElementDialogForm:"#dialogForm",toggleClassOrdering:"#toggleClassOrdering",validatorSelected:"select#validatorsList",filterSelected:"select#filtersList",optionSelected:"select#optionsList",formFilename:".formFilename",ajaxError:"#ajaxErrorDetails"};
a.ZFM.className={droppableActiveClass:"ui-drop-hover",sortableActiveClass:"ui-drop-hover",sortablePlaceholer:"zfm-sortable-placeholder",sortableElement:"sortable",sortableHandle:"handle",sortableElementPart:"elementPart",sortablePlaceholder:"zfm-sortable-placeholder"};a.ZFM.subSelectors={elementDraggable:a.ZFM.selectors.elementDraggableContainer+" .formElement",elementsSwitch:a.ZFM.selectors.elementDraggableContainer+" #switchPart",editElementTabs:a.ZFM.selectors.editElementDialogForm+" #tabs",editElementAttributesArea:a.ZFM.selectors.editElementDialogForm+
" #generalArea #attributesArea",sortableElement:a.ZFM.selectors.sortableArea+" ."+a.ZFM.className.sortableElement,sortableHandle:a.ZFM.selectors.sortableArea+" ."+a.ZFM.className.sortableHandle,sortableElementPart:a.ZFM.selectors.sortableArea+" ."+a.ZFM.className.sortableElementPart};a.ZFM.images={fieldUpToDate:'<img src="'+site.baseUrl+'/images/zfm/updateDone.png" title="update done" alt="update done" />',filedUpdateInProgress:'<img src="'+site.baseUrl+'/images/zfm/updateProcessing.gif" title="update in progress" alt="update in progress" />',
nextElements:'<img src="'+site.baseUrl+'/images/zfm/slideright.png" alt="Next" title="Next elements" />',previousElements:'<img src="'+site.baseUrl+'/images/zfm/slideleft.png" alt="Previous" title="Previous elements" />',openEye:'<img src="'+site.baseUrl+'/images/zfm/open.png" title="Open sidebar" alt="eye" />',closeCross:'<img src="'+site.baseUrl+'/images/zfm/close.png" title="Close sidebar" alt="cross" />'};a.ZFM.contextMenu={add:"formElementAddMenu",edit:"formElementEditMenu"}})(jQuery)});