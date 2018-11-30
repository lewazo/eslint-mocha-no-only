/**
 * @fileoverview Warns or throws an error if a .only function call is present on describe, context, it, specify, suite and test methods.
 * @author Anthony Jean
 */
'use strict';

const mochaKeywords = [
    'describe',
    'context',
    'contract',
    'it',
    'specify',
    'suite',
    'test'
];

const isParentAMochaKeyword = parentName => mochaKeywords.some(word => parentName === word);

module.exports = function(context) {
    return {
        'Identifier': function(node) {
            if (node.name == 'only' && node.parent.object) {
                const parentName = node.parent.object.name;
                if (isParentAMochaKeyword(parentName)) {
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
