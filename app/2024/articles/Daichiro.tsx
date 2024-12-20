import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'
import {FullImagePage} from '@/components/FullImagePage'

export function Daichiro() {

  const info = getArticleInfo('daichiro', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)

  return (
    <div id={info.id}>
      <FullImagePage pageNumber={startPage} src="/2024/daichiro/01.png"/>
      <FullImagePage pageNumber={startPage + 1} src="/2024/daichiro/02.png"/>
      <FullImagePage pageNumber={startPage + 2} src="/2024/daichiro/03.png"/>
      <FullImagePage pageNumber={startPage + 3} src="/2024/daichiro/04.png"/>
    </div>
  )
}
