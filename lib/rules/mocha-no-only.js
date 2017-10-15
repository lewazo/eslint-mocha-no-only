/**
 * @fileoverview Warns or throws an error if a .only function is present on describes, contexts and its
 * @author Anthony Jean
 */
'use strict';

module.exports = function(context) {
    return {
        'Identifier': function(node) {
            if (node.name == 'only' && node.parent.object) {
                const parentName = node.parent.object.name;

                if (parentName == 'describe' || parentName == 'context' || parentName == 'it') {
                    context.report({
                        node: node,
                        message: 'Unexpected "only" method called on a mocha test keyword'
                    });
                }
            }
        }
    };
};

module.exports.fixable = 'code';
module.exports.schema = [];
