# Masked textboxes
# https//github.com/Nvyra/titanium-appcelerator-fields-mask
# Coffeescript version contributed by Alfonso Cora (github.com/alfonsocora)
#
# Declare:
#   Mask = require('lib/mask')
#
# Basic usage
#
#  txtPhone.addEventListener 'change', ->
#    Mask.mask txtPhone, Mask.phone
#
# Usage with regex
#  txtPhone.addEventListener 'change', ->
#    Mask.mask txtPhone, Mask.generic,
#      regex: /^(\d{3})(\d{3})(\d{4})$/
#      syntax: "$1-$2-$3"
#      maxValue: 12
#

exports.mask = (_field, _function, _genericParameters) ->
  _field.value = _function(_field.value, _genericParameters)

exports.generic = (v, _genericParameters) ->
  _regex = _genericParameters.regex
  _syntax = _genericParameters.syntax
  _maxValue = _genericParameters.maxValue
  v = v.replace(/D/g, "")
  v = v.replace(_regex, _syntax)
  (if _maxValue then v.slice(0, _maxValue) else v)

exports.postcode = (v) ->
  v = v.replace(/D/g, "")
  v = v.replace(/^(\d{5})(\d)/, "$1-$2")
  v.slice 0, 9

exports.phone = (v) ->
  v = v.replace(/D/g, "")
  v = v.replace(/^(\d\d)(\d)/g,"($1) $2")
  v = v.replace(/(\d{4})(\d)/,"$1-$2")
  v.slice 0, 14
