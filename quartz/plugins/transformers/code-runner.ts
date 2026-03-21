import type { BuiltinTheme } from 'shiki'
import type { Root } from 'mdast'

import { visit } from 'unist-util-visit'

import type { QuartzTransformerPlugin } from '~/types/plugins'

import { loadShikiTheme } from '~/utils/theme/loadShikiTheme'
import codeRunnerStyles from '~/styles/code-runner.scss'
import lucideScript from '~/components/scripts/lucide.inline'
import codeRunnerScript from '~/components/scripts/code-runner.inline'

export interface Options {
    theme: {
        dark: BuiltinTheme
        light: BuiltinTheme
    }
}

export const SUPPORTED_LANGUAGES = ['python'] as const

export const META_OPTION = 'showCodeRunner'

export const DEFAULT_OPTIONS: Required<Options> = {
    theme: {
        dark: 'github-dark',
        light: 'github-light'
    }
}

export const CodeRunner: QuartzTransformerPlugin = (opts?: Options) => {
    return {
        name: 'CodeRunner',
        markdownPlugins() {
            const plugin = (tree: Root) => {
                visit(tree, 'code', (node, index, parent) => {
                    if (
                        !SUPPORTED_LANGUAGES.includes(node.lang) ||
                        node.meta !== META_OPTION
                    )
                        return

                    if (parent?.children && typeof index !== 'undefined') {
                        const newNode = {
                            type: 'html',
                            value: `
                            <div class="code-runner">
                                <div class="code-runner__header">
                                    <div class="code-runner__language">${node.lang}</div>
                                    <div class="code-runner__actions">
                                      <button class="code-runner__action" data-action="copy" data-copied="false">
                                      <svg data-lucide="copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                                      <svg data-lucide="check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                                      </button>
                                      <button class="code-runner__action" data-action="run">
                                      <svg data-lucide="play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>
                                      </button>
                                      <button class="code-runner__action" data-action="collapse">
                                      <svg data-lucide="chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                                      </button>
                                    </div>
                                </div>
                                <div class="code-runner__editor">
                                    <textarea class="code-runner__textarea">${node.value}</textarea>
                                </div>
                                <div class="code-runner__output"></div>
                            </div>
                          `
                        }

                        parent.children.splice(index, 1, newNode)
                        return index + 1
                    }
                })
            }

            return [() => plugin]
        },
        externalResources() {
            const { light, dark } = { ...DEFAULT_OPTIONS.theme, ...opts?.theme }

            const lightTheme = loadShikiTheme(light)
            const darkTheme = loadShikiTheme(dark)

            const script = `;(() => {
                window.lightCodeMirrorTheme = ${JSON.stringify(lightTheme, null, 0)}
                window.darkCodeMirrorTheme = ${JSON.stringify(darkTheme, null, 0)}
            })()`

            return {
                css: [
                    {
                        content: codeRunnerStyles,
                        inline: true
                    }
                ],
                js: [
                    {
                        script: script,
                        loadTime: 'afterDOMReady',
                        contentType: 'inline'
                    },
                    {
                        src: 'https://cdn.jsdelivr.net/npm/pyodide@0.29.3/pyodide.min.js',
                        loadTime: 'afterDOMReady',
                        contentType: 'external'
                    },
                    {
                        script: codeRunnerScript,
                        loadTime: 'afterDOMReady',
                        contentType: 'inline'
                    }
                ]
            }
        }
    }
}
