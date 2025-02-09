<script setup lang="ts">
  import { CodeXml, UserRoundPen, Pickaxe, Guitar } from 'lucide-vue-next';
  const personal = {
    hobbies: ['写真撮影（風景・スナップ）', 'ピアノ演奏', 'カフェ巡り', '読書（技術書・小説）', 'ハイキング'],
    works: ['フロントエンド開発', 'バックエンド開発', 'WordPress', 'ホームページ制作'],
    favoriteQuote: {
      text: '完璧を目指すよりも、まず行動することから始めよう',
      author: 'Walt Disney',
    },
  };
  const skills = [
    {
      title: 'フロントエンド',
      items: [
        { name: 'Semantic HTML5', level: 90 },
        { name: 'CSS3', level: 80 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue 3.x~(Nuxt3)', level: 85 },
        { name: 'React 16.x~(Next.js 13.x)', level: 70 },
        { name: 'jQuery', level: 90 },
      ],
    },
    {
      title: 'バックエンド',
      items: [
        { name: 'Laravel 9.x~', level: 70 },
        { name: 'WordPress 5.x~', level: 90 },
        { name: 'Node.js', level: 50 },
        { name: 'Go', level: 40 },
      ],
    },
    {
      title: '環境など',
      items: [
        { name: 'Windows10~', level: 90 },
        { name: 'Mac', level: 70 },
        { name: 'Linux', level: 50 },
        { name: 'AWS', level: 80 },
        { name: 'GCP', level: 30 },
        { name: 'Docker', level: 50 },
      ],
    },
    {
      title: 'その他',
      items: [
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 25 },
        { name: 'スクラム開発', level: 80 },
      ],
    },
  ];

  const experience = [
    {
      period: '2022年4月 - 現在',
      title: 'シニアフロントエンドエンジニア',
      company: '株式会社テックイノベーション',
      description:
        'プロジェクトリーダーとして、大規模Webアプリケーションの設計・開発を担当。Vue.jsとTypeScriptを用いたフロントエンド開発、およびチームマネジメントを行う。',
    },
    {
      period: '2020年4月 - 2022年3月',
      title: 'フロントエンドエンジニア',
      company: '株式会社ウェブソリューションズ',
      description: 'React.jsを使用したSPAの開発、既存システムのモダン化プロジェクトに従事。パフォーマンス最適化とアクセシビリティ改善を実現。',
    },
    {
      period: '2018年4月 - 2020年3月',
      title: 'Webエンジニア',
      company: '株式会社テックスタート',
      description: 'スタートアップ企業にてフルスタックエンジニアとして、新規サービスの開発に携わる。フロントエンド開発を中心に、バックエンド開発も担当。',
    },
  ];
</script>
<template>
  <div>
    <common-page-title title="Profile" subtitle="プロフィール" description="私と私のキャリアについて" />
    <layouts-content-wrapper>
      <!-- プロフィール情報 -->
      <div class="space-y-16">
        <!-- 自己紹介 -->
        <section>
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div class="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span class="text-6xl">👨‍💻</span>
            </div>
            <div class="flex-1 text-center md:text-left">
              <h2 class="text-2xl font-bold mb-4">清水 陽平</h2>
              <p class="text-black/60 dark:text-white/60 leading-relaxed">
                2012年からフリーランスエンジニアとして活動しています。<br />
                WordPressを使ったWEBサイト制作などを行っていましたが、2019年頃からモダンなフロントエンド開発やAPI開発なども手がけているフルスタックエンジニアです。
              </p>
            </div>
          </div>
        </section>
        <!-- パーソナル情報 -->
        <section>
          <common-section-title class="mb-8">Personal</common-section-title>
          <ui-table-wrapper>
            <!-- 趣味 -->
            <ui-table-row>
              <ui-table-row-title>
                <user-round-pen class="text-secondary w-5 h-5" />
                <h3 class="text-lg font-medium">屋号・氏名</h3>
              </ui-table-row-title>
              <ui-table-row-content>
                <p>SilMo 清水陽平</p>
              </ui-table-row-content>
            </ui-table-row>

            <!-- 得意なこと -->
            <ui-table-row>
              <ui-table-row-title>
                <guitar class="text-emerald-600 w-5 h-5" />
                <h3 class="text-lg font-medium">趣味</h3>
              </ui-table-row-title>
              <ui-table-row-content>
                <common-tag v-for="(hobby, index) in personal.hobbies" :key="index" tag-color-class="tag-green">
                  {{ hobby }}
                </common-tag>
              </ui-table-row-content>
            </ui-table-row>

            <!-- 好きな言葉 -->
            <ui-table-row>
              <ui-table-row-title>
                <pickaxe class="text-purple-600 w-5 h-5" />
                <h3 class="text-lg font-medium">事業内容</h3>
              </ui-table-row-title>
              <ui-table-row-content>
                <common-tag v-for="(work, index) in personal.works" :key="index" tag-color-class="tag-purple">
                  {{ work }}
                </common-tag>
              </ui-table-row-content>
            </ui-table-row>
          </ui-table-wrapper>
        </section>
        <!-- スキル -->
        <section>
          <common-section-title class="mb-8">Skills</common-section-title>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(category, index) in skills" :key="index">
              <h3 class="text-xl font-semibold mb-6 flex items-center gap-2 text-primary">
                <code-xml class="w-5 h-5" />
                {{ category.title }}
              </h3>
              <div class="space-y-4">
                <div v-for="skill in category.items" :key="skill.name" class="relative">
                  <div class="flex justify-between mb-1">
                    <span class="text-base font-semibold">{{ skill.name }}</span>
                    <span class="text-sm text-black/60 dark:text-white/60">{{ skill.level }}%</span>
                  </div>
                  <div class="h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div
                      class="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                      :style="{ width: `${skill.level}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 経歴 -->
        <section>
          <common-section-title class="mb-8">History</common-section-title>
          <div class="space-y-8">
            <div v-for="(exp, index) in experience" :key="index" class="relative pl-6 pb-8 border-l-2 border-primary/20 last:pb-0">
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div>
                <span class="text-sm text-primary font-medium">{{ exp.period }}</span>
                <h3 class="text-lg font-medium mt-2">{{ exp.title }}</h3>
                <p class="text-sm text-black/60 dark:text-white/60 mt-1">{{ exp.company }}</p>
                <p class="mt-3 text-black/80 dark:text-white/80">{{ exp.description }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </layouts-content-wrapper>
  </div>
</template>
