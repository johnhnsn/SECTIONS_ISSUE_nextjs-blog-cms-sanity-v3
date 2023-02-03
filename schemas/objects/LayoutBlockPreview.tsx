import { PreviewProps } from 'sanity'

export const LayoutBlockPreview: React.FC<
  PreviewProps<'object'> & { url?: string }
> = (props) => {
  /** Here I want to get value of 'width' of THIS layout block and 'columns'
   * And based on these values I want to modify title to something like
   * "Full width two-column layout block" or "Reading width one-column
   * layout block".
   */
  const title = `Layout block`
  return props.renderDefault({
    ...props,
    title,
  })
}
