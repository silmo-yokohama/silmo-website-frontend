<script setup lang="ts">
  import { CodeXml, UserRoundPen, Pickaxe, Guitar } from 'lucide-vue-next';
  import type { ProfileApiResponse } from '~/types/api/profile';

  const config = useRuntimeConfig();
  const pageTitle = `SilMoについて | ${config.public.companyName}`;
  useSeoMeta({
    title: pageTitle,
    keywords: 'フロントエンド開発, バックエンド開発, フリーランスエンジニア, 神奈川, 東京, 横浜, WordPress ,Vue ,React, Laravel, Next.js, Nuxt3, Go',
    ogTitle: pageTitle,
    twitterTitle: pageTitle,
    twitterImage: 'http://wp.silmo.jp/wp-content/uploads/2025/02/silmo.logo-01.png',
  });

  // APIからプロフィールデータを取得（SSRを強制）
  const { data: profileResponse } = await useFetch<ProfileApiResponse>(`${config.public.apiEndpoint}/profile`, {
    key: 'profile-data',
    server: true, // サーバーサイドでのみデータ取得を行う
    cache: 'no-cache', // キャッシュを無効化
  });

  // エラーレスポンスの場合はエラーを投げる
  if (!profileResponse.value || 'error' in profileResponse.value) {
    throw createError({
      statusCode: profileResponse.value?.statusCode ?? 500,
      message: profileResponse.value?.error ?? 'データの取得に失敗しました',
    });
  }

  const profileData = ref(profileResponse.value.data); // refで反応性を持たせる

  // APIから取得したデータを元にpersonalオブジェクトを構築
  const personal = computed(() => ({
    hobbies: profileData.value.hobbies.map((h) => h.hobby),
    works: profileData.value.businessContents.map((b) => b.businessContent),
  }));

  // 経歴データの変換
  const experience = computed(() =>
    profileData.value.histories.map((history) => ({
      period: `${history.fromDate} - ${history.toDate === 'present' ? '現在' : history.toDate}`,
      title: history.position,
      company: history.company,
      description: history.description.replace(/\r\n/g, '\n'),
    }))
  );

  const skills = computed(() => profileData.value.skills);
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
                {{ category.name }}
              </h3>
              <div class="space-y-4">
                <div v-for="skill in category.children" :key="skill.name" class="relative">
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
