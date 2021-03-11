/**
 * @file nodereference_explorer_plugin_cck_link.js
 * Each Nodereference Explorer plugin has a client side implemenentation. It is about the saving
 * the selected value from the dialog to the underlying widget.
 */


/**
 * Save the value to the parent widget
 * @param widget
 *   parent widget
 * @param
 *   value to be saved, format: NODE_TITLE [nid: NID], e. g. Page [nid: 234]
 */
nodereference_explorer_plugin_cck_link_setValue = function(widget, value) {
  //TODO: split string with regular expression
  $(widget).val(value).blur(); //trigger change event for depending actions  
  var del1 = value.indexOf('[');
  var del2 = value.indexOf(':');
  var del3 = value.indexOf(']');
  title = value.substring(0, del1);
  nid = value.substring(del2+1, del3);
  $(widget+'-url').val('node/' +nid);
  $(widget+'-title').val(title);
}

/**
 * Removes the value from the parent widget and clears the preview
 * @param widget
 *   parent widget
 */
nodereference_explorer_plugin_cck_link_removeValue = function(widget) {
  $(widget).val('').blur();
  $(widget+'-url').val('');
  $(widget+'-title').val('');
}