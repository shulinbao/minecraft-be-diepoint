// 监听玩家死亡事件
mc.listen('onPlayerDie', (player) => {
    // 记录玩家的真实名称
    log('Player realName=' + player.realName + '.');

    // 如果玩家没有真实名称，直接返回
    if (!player.realName) return;

    // 向该玩家发送死亡点信息
    mc.runcmd(`tellraw @a[name="${player.realName}"] {"rawtext":[{"text":"你的死亡点在 ${parseInt(player.pos.x)} ${parseInt(player.pos.y)} ${parseInt(player.pos.z)}§r"}]}`);

    // 播放雷声音效给所有玩家
    mc.runcmd('playsound ambient.weather.thunder @a');

    // 延迟16秒后执行扣费和通知操作
    setTimeout(() => {
        // 从死亡玩家的账户中扣除1金币
        mc.runcmd(`scoreboard players remove ${player.realName} money 1`);

        // 全服通知玩家死亡及扣费信息
        mc.runcmd(`tellraw @a {"rawtext":[{"text":"震惊了！一个玩家不幸地去世了，他失去了1金币作为他的医疗费！"}]}`);
    }, 16000);
});

// 启动时记录插件信息
log('Death Notification Plugin by shulinbao');
