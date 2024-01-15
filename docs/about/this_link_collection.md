<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yoocda-CentOS6.png',
    name: 'yoocda-CentOS6 人呼んで“トニー”',
    title: 'Counts Koustoms Big fan',
    links: [
      { icon: 'github', link: 'https://github.com/yoocda-CentOS6' }
    ]
  }
]
</script>

# このリンク集について…

このリンク集は、以下管理人の趣味により非公式かつ個人的に作成されたものです。  
<VPTeamMembers size="small" :members="members" />
